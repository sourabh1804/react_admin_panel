import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="p-6 space-y-6 bg-gray-100 min-h-screen">
      
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-blue-900">Users</h1>
        <p className="text-gray-500">List of all registered users</p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow rounded-xl">
        <table className="w-full border-collapse">
          
          <thead className="bg-blue-100">
            <tr>
              <th className="text-left p-4 text-sm font-semibold text-blue-900">Name</th>
              <th className="text-left p-4 text-sm font-semibold text-blue-900">Username</th>
              <th className="text-left p-4 text-sm font-semibold text-blue-900">Email</th>
              <th className="text-left p-4 text-sm font-semibold text-blue-900">Company</th>
              <th className="text-left p-4 text-sm font-semibold text-blue-900">Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map(user => (
              <tr
                key={user.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="p-4 font-medium text-gray-800">
                  {user.name}
                </td>

                <td className="p-4 text-gray-600">
                  {user.username}
                </td>

                <td className="p-4 text-gray-600">
                  {user.email}
                </td>

                <td className="p-4 text-gray-600">
                  {user.company.name}
                </td>

                <td className="p-4">
                  <Link
                    to={`/users/${user.id}`}
                    className="text-blue-600 hover:underline text-sm font-medium"
                  >
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default Users;
