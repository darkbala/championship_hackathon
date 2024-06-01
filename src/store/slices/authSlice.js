import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const api = "http://localhost:8087";

// Signup Thunk
export const signup = createAsyncThunk(
  "/register",
  async ({ password, email, title, bankAccount }) => {
    try {
      const response = await axios.post(`${api}/register`, {
        password,
        email,
        title,
        bankAccount,
      });

      const token = response.data.access_token;
      localStorage.setItem("access_token", token);
      localStorage.setItem("email", email);
      return { email, token };
    } catch (error) {
      throw error;
    }
  }
);

// Login Thunk
export const login = createAsyncThunk("/auth", async ({ password, email }) => {
  try {
    const response = await axios.post(`${api}/auth`, { password, email });
    const token = response.data.access_token;
    localStorage.setItem("access_token", token);
    localStorage.setItem("email", email);
    return { email, token };
  } catch (error) {
    throw error;
  }
});

// Refresh Token Thunk
export const refreshToken = createAsyncThunk("auth/refreshToken", async () => {
  try {
    const refreshToken = localStorage.getItem("refresh_token");
    const response = await axios.post(`${api}/refresh_token`, { refreshToken });
    const newToken = response.data.access_token;
    localStorage.setItem("refresh_token", newToken);
    return newToken;
  } catch (error) {
    throw error;
  }
});

// Auth Slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("access_token") || null,
    email: localStorage.getItem("email") || null,
    status: "",
    error: null,
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem("access_token");
      localStorage.removeItem("email");
      localStorage.removeItem("username");

      state.token = null;
      state.email = null;
      state.username = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.token = action.payload.token;
        state.email = action.payload.email;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(signup.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.token = action.payload.token;
        state.email = action.payload.email;
      })
      .addCase(signup.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(refreshToken.fulfilled, (state, action) => {
        state.token = action.payload;
      });
  },
});

// Export actions and reducer
export const { logout } = authSlice.actions;
export default authSlice.reducer;