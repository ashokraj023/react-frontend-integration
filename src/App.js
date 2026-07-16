import Login from "./components/Login";
import { BrowserRouter, Routes, Route }
from "react-router-dom";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import Navbar from "./components/Navbar";
import ProductDetail from "./components/ProductDetail";
import EditProduct from "./components/EditProduct";
import Register from "./components/Register";


function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<ProductList />}
        />
<Route
  path="/add"
  element={<AddProduct />}
/>
 <Route
    path="/product/:id"
    element={<ProductDetail />}
  />

  <Route
  path="/edit/:id"
  element={<EditProduct />}
/>
  
<Route
  path="/login"
  element={<Login />}
/>
<Route
  path="/register"
  element={<Register />}
/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;