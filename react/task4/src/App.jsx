import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./App.css";
function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (location.state) {
      setUsername("");
      setPassword("");
    }
  }, [location.state]);

  const handleLogin = () => {
    navigate("/home", {
      state: { username, password },
    });
  };

  return (
    <div className="main">
      <h1>Login</h1>
      <div className="input">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="button" onClick={handleLogin}>Login</button>
    </div>
  );
}

export default App;