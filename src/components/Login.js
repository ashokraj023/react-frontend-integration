import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await login(email, password);

      alert("Login Successful");

      navigate("/");

    } catch (error) {

      alert("Invalid Email or Password");

      console.log(error);

    }

  };

  return (

    <div className="form-container">

      <h1>Login</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          required
        />

        <button type="submit">
          Login
        </button>

      </form>

    </div>

  );

}

export default Login;