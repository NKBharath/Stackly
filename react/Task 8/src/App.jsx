import Child1 from "./components/Child1";
import "./App.css";

function App() {
  const userData = {
    name: "Bharath",
    role: "Frontend Developer",
    company: "GS Groups",
  };

  return (
    <div className="app">
      <h1>Props Drilling Example</h1>
      <Child1 data={userData} />
    </div>
  );
}

export default App;