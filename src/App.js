import Login from "./components/Login";
import { BrowserRouter, Routes, Route }
from "react-router-dom";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import Navbar from "./components/Navbar";
import ProductDetail from "./components/ProductDetail";
import EditProduct from "./components/EditProduct";


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
      </Routes>

    </BrowserRouter>
  );
}

export default App;