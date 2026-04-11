import { useRef, useState } from "react";
import "./App.css";

function ProfileUpdate() {
  const fileInputRef = useRef(null);

  // Final profile image
  const [image, setImage] = useState(
    "https://cdn-icons-png.flaticon.com/512/149/149071.png"
  );

  // Temporary preview image
  const [preview, setPreview] = useState(null);

  // Open file picker
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  // Handle file selection
  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);
    }
  };

  // Confirm upload
  const handleConfirm = () => {
    setImage(preview);
    setPreview(null);
  };

  // Cancel upload
  const handleCancel = () => {
    setPreview(null);
    fileInputRef.current.value = ""; // reset input
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2>Profile Update</h2>

        {/* Show preview if exists, else actual image */}
        <img
          src={preview || image}
          alt="Profile"
          className="profile-img"
        />

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageChange}
          accept="image/*"
          hidden
        />

        {!preview && (
          <button onClick={handleButtonClick} className="upload-btn">
            Upload Image
          </button>
        )}

        {preview && (
          <div className="btn-group">
            <button onClick={handleConfirm} className="confirm-btn">
              Confirm
            </button>
            <button onClick={handleCancel} className="cancel-btn">
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfileUpdate;