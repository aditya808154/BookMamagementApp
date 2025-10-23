import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddBook() {
  const navigate = useNavigate(); // useNavigate hook
  const [book, setBook] = useState({
    title: "",
    author: "",
    price: "",
    stock: "",
    category: "",
  });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/api/book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book),
    })
      .then((res) => res.json())
      .then((data) => alert("Book Added Successfully ✅"))
      .catch((err) => console.log(err));

    setBook({ title: "", author: "", price: "", stock: "", category: "" });
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    maxWidth: "400px",
    margin: "auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
  };

  const inputStyle = {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
  };

  const buttonStyle = {
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#0077cc",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s",
  };

  const viewButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#28a745",
    marginTop: "10px",
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ color: "#333" }}>Add New Book</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input name="title" value={book.title} onChange={handleChange} placeholder="Title" style={inputStyle} required />
        <input name="author" value={book.author} onChange={handleChange} placeholder="Author" style={inputStyle} required />
        <input name="price" value={book.price} onChange={handleChange} placeholder="Price" style={inputStyle} type="number" required />
        <input name="stock" value={book.stock} onChange={handleChange} placeholder="Stock" style={inputStyle} type="number" required />
        <input name="category" value={book.category} onChange={handleChange} placeholder="Category" style={inputStyle} required />
        <button type="submit" style={buttonStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#005599")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#0077cc")}
        >
          Add Book
        </button>
      </form>

      {/* View Books Button */}
      <button
        style={viewButtonStyle}
        onClick={() => navigate("/view")}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#218838")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#28a745")}
      >
        View Books
      </button>
    </div>
  );
}
