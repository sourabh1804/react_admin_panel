import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()),
      fetch("https://fakestoreapi.com/products").then(res => res.json())
    ]).then(([usersData, productsData]) => {
      setUsers(usersData);
      setProducts(productsData);
      setLoading(false);
    });
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="p-8 space-y-12 bg-gray-100 min-h-screen">
      
      <div className="bg-white shadow p-6">
  
  
  <div className="mb-6">
    <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
    <p className="text-sm text-gray-500">Overview of products & users</p>
  </div>

  
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

    <div className="flex items-center justify-between p-5  bg-gray-100 border ">
      <div>
        <p className="text-sm font-medium text-blue-600">Total Users</p>
        <h2 className="text-3xl font-bold text-blue-900">{users.length}</h2>
      </div>
      
    </div>

    <div className="flex items-center justify-between p-5  bg-gray-100 border ">
      <div>
        <p className="text-sm font-medium text-blue-600">Total Products</p>
        <h2 className="text-3xl font-bold text-blue-900">{products.length}</h2>
      </div>
      
    </div>

  </div>
</div>


      
      <div className="bg-white shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Latest Products</h2>
          <Link to="/products" className="text-sm text-blue-600 hover:underline">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5">
          {products.slice(0, 6).map(product => (
            <div
              key={product.id}
              className="border   p-4 text-center  cursor-pointer"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-24 mx-auto object-contain mb-3 "
              />
              <p className="text-sm font-medium text-blue-700 line-clamp-2">
                {product.title}
              </p>
              <p className="text-red-600 font-bold mt-1">
                ₹ {product.price}
              </p>
            </div>
          ))}
        </div>
      </div>

     
      <div className="bg-white  shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Latest Users</h2>
          <Link to="/users" className="text-sm text-blue-600 hover:underline">
            View All
          </Link>
        </div>

        <div className="space-y-4">
          {users.slice(0, 4).map(user => (
            <div
              key={user.id}
              className="flex items-center justify-between p-4 border  cursor-pointer "
            >
              <div className="flex items-center gap-4">
                
                <div>
                  <p className="font-semibold text-gray-800">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                {user.company.name}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
