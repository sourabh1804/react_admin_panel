import { createContext, useState } from "react";

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // Sare users load karne ka function
  const loadAllUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.error("Failed to load users", error);
    } finally {
      setLoading(false);
    }
  };

  // Ek user by ID load karne ka function
  const loadUserById = async (id) => {
    setLoading(true);
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      const data = await res.json();
      setCurrentUser(data);
    } catch (error) {
      console.error("Failed to load user", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <UsersContext.Provider value={{
      users,
      currentUser,
      loading,
      loadAllUsers,
      loadUserById
    }}>
      {children}
    </UsersContext.Provider>
  );
};
