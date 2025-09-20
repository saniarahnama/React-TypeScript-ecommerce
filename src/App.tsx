import ProductList from "./pages/ProductList";
import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ProductInfo from "./pages/ProductInfo";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import { useState } from "react";
import ProtectedRoute from "./components/ProtectedRoute";
import protectedRouteType from "./interfaces/protectedRouteType";
import ShoppingList from "./pages/ShoppingList";
import { CartProvider } from "./context/CartContext";
import Womens from "./pages/Womens";
import Mens from "./pages/Mens";
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState<string>("");

  const protectedRoutes: protectedRouteType[] = [
    { path: "/", element: <ProductList /> },
    { path: "/product/:id", element: <ProductInfo /> },
    { path: "/Basket", element: <ShoppingList /> },
     { path: "/womensClothes", element: <Womens/> },
     { path: "/mensClothes", element: <Mens/> },
  ];

  return (
    <BrowserRouter>
      {isAuthenticated ? (
        <CartProvider userName={username}>
          <NavBar />

          <Routes>
            {protectedRoutes.map(({ path, element }) => (
              <Route
                key={path}
                path={path}
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    {element}
                  </ProtectedRoute>
                }
              />
            ))}
            
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </CartProvider>
      ) : (
        <Routes>
          <Route
            path="/login"
            element={
              <Login
                setIsAuthenticated={setIsAuthenticated}
                setUsername={setUsername}
              />
            }
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;