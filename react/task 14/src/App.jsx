import { useEffect, useState } from "react";
import { getUsers, addUser, updateUser, deleteUser } from "./api";
import UserForm from "./Userform.jsx"
import UserTable from "./UserTable.jsx"

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  // READ (GET)
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await getUsers();
    setUsers(res.data.slice(0, 5)); // limit for demo
  };

  // CREATE (POST)
  const handleAddUser = async (user) => {
    const res = await addUser(user);
    setUsers([...users, { ...res.data, id: Date.now() }]);
  };

  // UPDATE (PUT)
  const handleUpdateUser = async (user) => {
    await updateUser(user.id, user);
    setUsers(users.map(u => (u.id === user.id ? user : u)));
    setEditingUser(null);
  };

  // DELETE
  const handleDeleteUser = async (id) => {
    await deleteUser(id);
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        CRUD Application
      </h1>

      <UserForm
        onAdd={handleAddUser}
        onUpdate={handleUpdateUser}
        editingUser={editingUser}
      />

      <UserTable
        users={users}
        onEdit={setEditingUser}
        onDelete={handleDeleteUser}
      />
    </div>
  );
}

export default App;