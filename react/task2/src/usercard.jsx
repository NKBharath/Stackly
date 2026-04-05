function UserCard({ name, email, role }) {
  return (
    <div className="card">
      <h2 className="card-title">{name}</h2>
      <p><span>Email:</span> {email}</p>
      <p><span>Role:</span> {role}</p>
    </div>
  );
}

export default UserCard;