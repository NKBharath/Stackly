import { useState, useEffect } from "react";

function UserForm({ onAdd, onUpdate, editingUser }) {
  const [form, setForm] = useState({ name: "", email: "" });

  useEffect(() => {
    if (editingUser) {
      setForm(editingUser);
    }
  }, [editingUser]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingUser) {
      onUpdate(form);
    } else {
      onAdd(form);
    }

    setForm({ name: "", email: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded shadow mb-6 flex gap-4"
    >
      <input
        type="text"
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="border p-2 flex-1 rounded"
        required
      />

      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="border p-2 flex-1 rounded"
        required
      />

      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        {editingUser ? "Update" : "Add"}
      </button>
    </form>
  );
}

export default UserForm;