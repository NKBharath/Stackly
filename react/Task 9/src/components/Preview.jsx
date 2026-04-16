import { useContext } from "react";
import FormContext from "../context/FormContext";

function Preview() {
  const { formData } = useContext(FormContext);

  return (
    <div className="preview">

      <p><strong>Name:</strong> {formData.name || "—"}</p>
      <p><strong>Email:</strong> {formData.email || "—"}</p>
      <p><strong>Password:</strong> {formData.password || "—"}</p>
      <p><strong>City:</strong> {formData.city || "—"}</p>
    </div>
  );
}

export default Preview; 