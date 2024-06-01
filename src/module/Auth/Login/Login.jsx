import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../../store/slices/authSlice.js";
import cl from "./Login.module.scss";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const loading = useSelector((state) => state.auth.status === "loading");
  const error = useSelector((state) => state.auth.error);

  const handleLogin = () => {
    dispatch(login({ password, email })).then((response) => {
      if (response.meta.requestStatus === "fulfilled") {
        navigate("/register");
      } else {
        console.log("Ошибка входа:", response.error.message);
      }
    });
  };

  return (
    <div className={cl.Login}>
      <div className={cl.Login__inner}>
        <h2>Войти</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin} disabled={loading}>
          {loading ? "Загрузка..." : "Войти"}
        </button>{" "}
        <br />
        <span>Уже есть аккаунт? </span>
        <Link to="/signup">Регистрация</Link>
        {error && <p>Error: {error}</p>}
      </div>
    </div>
  );
};

export default Login;
