import UserCard from "./usercard";
import "./App.css";

function App() {

  const users = [
    {
      id: 1,
      name: "Bharath N K",
      email: "bharath@gmail.com",
      role: "Frontend Developer"
    },
    {
      id: 2,
      name: "Arun Kumar",
      email: "arun@gmail.com",
      role: "Backend Developer"
    },
    {
      id: 3,
      name: "Priya Sharma",
      email: "priya@gmail.com",
      role: "UI/UX Designer"
    },
    {
      id: 4,
      name: "Rahul Verma",
      email: "rahul@gmail.com",
      role: "Full Stack Developer"
    },
    {
      id: 5,
      name: "Sneha Iyer",
      email: "sneha@gmail.com",
      role: "Project Manager"
    }
  ];

  return (
    <div className="container">
      <h1 className="heading">Team Members</h1>

      <div className="card-container">
        {users.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            email={user.email}
            role={user.role}
          />
        ))}
      </div>
    </div>
  );
}

export default App;