import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!user) return <h3>Loading...</h3>;

  return (
    <div className="container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ⬅ Back
      </button>

      <h2>{user.name}</h2>

      <div className="details-card">
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Website:</strong> {user.website}</p>
        <p><strong>Company:</strong> {user.company.name}</p>

        <h3>Address</h3>
        <p>{user.address.street}, {user.address.suite}</p>
        <p>{user.address.city} - {user.address.zipcode}</p>
      </div>
    </div>
  );
}

export default UserDetails;