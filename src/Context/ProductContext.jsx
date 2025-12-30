import { createContext, useState } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  const loadAllProducts = async () => {
    setLoading(true);
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProducts(data);
    setLoading(false);
  };

  const loadProductById = async (id) => {
    setLoading(true);
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    setCurrentProduct(data);
    setLoading(false);
  };

  return (
    <ProductsContext.Provider value={{
      products,
      currentProduct,
      loading,
      loadAllProducts,
      loadProductById
    }}>
      {children}
    </ProductsContext.Provider>
  );
};
