import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css"; // Tailwind CSS

import { ProductsProvider } from "./Context/ProductContext";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsProvider>
  <App />
</ProductsProvider>

    </BrowserRouter>
  </React.StrictMode>
);
