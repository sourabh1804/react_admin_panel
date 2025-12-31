import { useContext, useEffect } from "react";
import { ProductsContext } from "../Context/ProductContext";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";

const Products = () => {
  const { products, loadAllProducts, loading } = useContext(ProductsContext);

  useEffect(() => {
    if (products.length === 0) {
      loadAllProducts();
    }
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="p-6 space-y-6">
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-black">Products</h1>
        <p className="text-gray-500">Browse all available products</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-gray-50 border border-green-100 rounded-xl p-4 flex flex-col">
            <img src={product.image} alt={product.title} className="h-20 w-full object-contain mb-4" />
            <h3 className="font-semibold text-blue-600 line-clamp-2 mb-1">{product.title}</h3>
            <p className="text-red-700 font-semibold mb-2">₹ {product.price}</p>
            <Link to={`/products/${product.id}`} className="mt-auto text-blue-800 hover:underline text-sm">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
