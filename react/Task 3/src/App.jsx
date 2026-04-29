import { useState } from "react";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showList, setShowList] = useState(true);
  const [search, setSearch] = useState("");

  const users = [
    { id: 1, name: "Bharath", role: "Frontend Dev" },
    { id: 2, name: "Arun", role: "Backend Dev" },
    { id: 3, name: "Keerthi", role: "UI Designer" },
    { id: 4, name: "Divya", role: "Tester" },
    { id: 5, name: "Rahul", role: "Full Stack Dev" },
  ];

  // Filter logic
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Conditional & List Rendering</h1>

      {/* Login Toggle */}
      <button
        className={isLoggedIn ? "btn logout" : "btn login"}
        onClick={() => setIsLoggedIn(!isLoggedIn)}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>

      {/* Conditional Message */}
      <p style={{ color: isLoggedIn ? "green" : "red" }}>
        {isLoggedIn ? "Welcome Back!" : "Please Login"}
      </p>

      {/* Show/Hide List */}
      <button className="btn toggle" onClick={() => setShowList(!showList)}>
        {showList ? "Hide List" : "Show List"}
      </button>

      {/* Search Filter */}
      {showList && (
        <>
          <input
            type="text"
            placeholder="Search user..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search"
          />

          {/* List Rendering */}
          <div className="list">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <div
                  key={user.id}
                  className={`card ${
                    isLoggedIn ? "active" : "inactive"
                  }`}
                >
                  <h3>{user.name}</h3>
                  <p>{user.role}</p>
                </div>
              ))
            ) : (
              <p className="no-data">No Data Available</p>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default App;