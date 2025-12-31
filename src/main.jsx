import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css"; // Tailwind CSS

import { ProductsProvider } from "./Context/ProductContext";
import { UsersProvider } from "./Context/UserContext";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsProvider>
        <UsersProvider>

          <App />
        </UsersProvider>
  
</ProductsProvider>

    </BrowserRouter>
  </React.StrictMode>
);
