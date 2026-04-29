function UserTable({ users, onEdit, onDelete }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-t">
              <td className="p-2">{user.name}</td>
              <td className="p-2">{user.email}</td>
              <td className="p-2 flex justify-center gap-2">
                <button
                  onClick={() => onEdit(user)}
                  className="bg-yellow-400 px-3 py-1 rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() => onDelete(user.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;