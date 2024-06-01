import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../../store/slices/authSlice.js";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const loading = useSelector((state) => state.auth.status === "loading");
  const error = useSelector((state) => state.auth.error);
  const token = useSelector((state) => state.auth.token);

  const handleSignup = () => {
    dispatch(signup({ password, email, title, bankAccount })).then(
      (response) => {
        if (response.meta.requestStatus === "fulfilled") {
          navigate("/");
        } else {
          console.log("Signup error:", response.error.message);
        }
      }
    );
  };

  if (token) {
    return null;
  }

  return (
    <div style={{ marginTop: "48px" }}>
      <div>
        <h2>Signup</h2>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Bank Account"
          value={bankAccount}
          onChange={(e) => setBankAccount(e.target.value)}
        />
        <button onClick={handleSignup} disabled={loading}>
          {loading ? "Loading..." : "Signup"}
        </button>
        {error && <p>Error: {error}</p>}
      </div>
    </div>
  );
};

export default Signup;
