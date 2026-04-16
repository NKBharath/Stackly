import { useState } from "react";
import FormContext from "./context/FormContext";
import Form from "./components/Form";
import Preview from "./components/Preview";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    city: ""
  });

  const [theme, setTheme] = useState("light");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <FormContext.Provider
      value={{ formData, handleChange, theme, toggleTheme }}
    >
      <div className={`app ${theme}`}>
        <div className="container">
          <Form />
          <Preview />
        </div>
      </div>
    </FormContext.Provider>
  );
}

export default App; 