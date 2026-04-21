import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function UserList() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container">
      <h2>Users List</h2>
      <div className="user-grid">
        {users.map(user => (
          <div
            key={user.id}
            className="card"
            onClick={() => navigate(`/user/${user.id}`)}
          >
            {user.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;