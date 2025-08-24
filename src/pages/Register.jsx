import { useState, useContext } from "react";
import { AddUserContext } from "../context/AddUserContext";
import { Layout } from "../components/Layout";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom"
import "../styles/pages/Register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { register } = useContext(AddUserContext);
  const { setUser } = useContext(UserContext);

  const nagivate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!username || !email || !password) {
      setError("Debes completar todos los campos ❌");
      return;
    }

    const newUser = { username, email, password };
    console.log("Datos enviados:", newUser);


    const result = await register(username, email, password);

    if (result) {
      setSuccess("Usuario registrado con éxito 🚀");
      setUser(true);
      console.log("Usuario creado:", result);

      nagivate("/home")
      setUsername("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <Layout>
      <div>
        <section className="inputs-content">
          <h2 className="subtitle-reg">Hola, bienvenido</h2>
          <form className="form-cont" onSubmit={handleSubmit}>
            <div className="usu-reg">
              <label>Username:</label>
              <input
                className="input-usu"
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </div>
            <div className="email-reg">
              <label>Correo electrónico:</label>
              <input
                className="input-email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="pass-reg">
              <label>Contraseña:</label>
              <input
                className="input-pass"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <button className="button-reg">Registrar</button>
          </form>

        </section>
      </div>
      <div className="msj-error">
        {error && <p >{error}</p>}
      </div>
      <div className="msj-success">
        {success && <p >{success}</p>}
      </div>
    </Layout>
  );
};

export { Register };