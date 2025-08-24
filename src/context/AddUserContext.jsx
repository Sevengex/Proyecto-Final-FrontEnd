import { createContext, useState } from "react";

const AddUserContext = createContext();

const UserProvider = (props) => {
  const [user, setUser] = useState(null);

  const register = async (username, email, password) => {
    try {
      const response = await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (!response.ok) throw new Error("Error al registrar usuario");

      const token = await response.json();
      setUser(token);
      return token;

    } catch (error) {
      console.error("❌ Error en register:", error.message);
    }
  };

  return (
    <AddUserContext.Provider value={{ user, register }}>
      {props.children}
    </AddUserContext.Provider>
  );
};

export { UserProvider, AddUserContext };