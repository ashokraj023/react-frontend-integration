import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {

    if (token) {

      try {

        const decoded = jwtDecode(token);
        setUser(decoded);

      } catch (error) {

        console.log(error);

        localStorage.removeItem("token");
        setToken(null);

      }

    }

  }, [token]);

  const login = async (email, password) => {

    const res = await axios.post(
      "http://localhost:3000/auth/login",
      {
        email,
        password
      }
    );

    localStorage.setItem("token", res.data.token);

    setToken(res.data.token);

  };

  const register = async (email, password) => {

  const res = await axios.post(
    "http://localhost:3000/auth/register",
    {
      email,
      password
    }
  );

  return res.data;

};

  const logout = () => {

    localStorage.removeItem("token");

    setToken(null);

    setUser(null);

  };

  return (

    <AuthContext.Provider
  value={{
    user,
    token,
    login,
    register,
    logout
  }}
>

      {children}

    </AuthContext.Provider>

  );

}

export const useAuth = () => useContext(AuthContext);