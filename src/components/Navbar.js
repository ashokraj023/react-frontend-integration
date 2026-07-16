import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {

  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {

    logout();

    alert("Logged Out Successfully");

    navigate("/login");

  };

  return (

    <nav className="navbar">

      <h2>🛒 Product Manager</h2>

      <div className="nav-links">

        <Link to="/">Products</Link>

        <Link to="/add">Add Product</Link>

        {!user ? (
          <>
            <Link to="/login">Login</Link>

            <Link to="/register">Register</Link>
          </>
        ) : (
          <button
            className="logout-btn"
            onClick={handleLogout}
          >
            Logout
          </button>
        )}

      </div>

    </nav>

  );

}

export default Navbar;