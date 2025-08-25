import { useState } from "react";
import { Layout } from "../components/Layout";
import { useAuth } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import "../styles/pages/Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const result = await login(username, password);

    if (result.success) {
      setUsername("");
      setPassword("");
      navigate("/home");
    } else {
      setError(result.message);
    }
  };

  return (
    <Layout>
      <section className="login-cont">
        <div className="subTitle-cont">
          <h2>Hola, bienvenido de nuevo</h2>
        </div>
        <p className="usu-log">Usuario de prueba: johnd, m38rmF$</p>
        <form className="form-content" onSubmit={handleLogin}>
          <div>
            <label>Nombre de usuario:</label>
            <input
              className="input-usu"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>
          <div>
            <label>Contraseña:</label>
            <input
              className="input-usu"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button className="button-ingresar">Ingresar</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </section>
    </Layout>
  );
};

export { Login };