import React, { useState } from "react";

export default function DeleteBook() {
  const [id, setId] = useState("");

  const handleDelete = () => {
    fetch(`http://localhost:8080/api/book/${id}`, {
      method: "DELETE",
    })
      .then(() => alert("Book Deleted Successfully ❌"))
      .catch((err) => console.log(err));
    setId("");
  };

  return (
    <div>
      <h2>Delete Book</h2>
      <input
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Enter Book ID"
      />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
