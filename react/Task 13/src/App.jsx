import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
function App() {
  const [users, setUsers] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) =>
        setUsers(res.data))
      .catch((err) => 
        console.error(err));
  }, []);
  console.log(users);
  const handleNext = () => {
    if (index < users.length - 1) {
      setIndex(index + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
  <div className="container">
    <div className="card">
      {users.length > 0 && (
        <>
          <h2>ID: {users[index].id}</h2>
          <h2>{users[index].name}</h2>
          <p>{users[index].email}</p>
        </>
      )}

      <div className="buttons">
        <button onClick={handlePrev} disabled={index === 0}>
          Previous
        </button>

        <button onClick={handleNext} disabled={index === users.length - 1}>
          Next
        </button>
      </div>
    </div>
  </div>
)}
export default App