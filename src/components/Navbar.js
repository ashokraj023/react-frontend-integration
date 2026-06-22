import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>🛒 Product Manager</h2>

      <div className="nav-links">
        <Link to="/">Products</Link>
        <Link to="/add">Add Product</Link>
      </div>
    </nav>
  );
}

export default Navbar;