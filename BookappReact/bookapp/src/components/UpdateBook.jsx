import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function UpdateBook() {
  const { id } = useParams(); // ✅ id parameter
  const navigate = useNavigate();
  const [book, setBook] = useState({
    title: "",
    author: "",
    price: "",
    stock: "",
    category: "",
  });

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:8080/api/book/${id}`)
        .then((res) => res.json())
        .then((data) => setBook(data))
        .catch((err) => console.log(err));
    }
  }, [id]);

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8080/api/book/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Book Updated Successfully ✅");
        navigate("/view");
      })
      .catch((err) => console.log(err));
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop: "30px",
    fontFamily: "Arial, sans-serif",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    padding: "30px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "450px",
    backgroundColor: "#f9f9f9",
  };

  const inputStyle = {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
  };

  const buttonStyle = {
    padding: "12px",
    backgroundColor: "#0077cc",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "0.3s",
  };

  const buttonHover = (e) => {
    e.target.style.backgroundColor = "#005599";
  };

  const buttonOut = (e) => {
    e.target.style.backgroundColor = "#0077cc";
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ color: "#333", marginBottom: "20px" }}>Update Book</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          name="title"
          value={book.title}
          onChange={handleChange}
          placeholder="Title"
          required
          style={inputStyle}
        />
        <input
          name="author"
          value={book.author}
          onChange={handleChange}
          placeholder="Author"
          required
          style={inputStyle}
        />
        <input
          name="price"
          value={book.price}
          onChange={handleChange}
          placeholder="Price"
          type="number"
          required
          style={inputStyle}
        />
        <input
          name="stock"
          value={book.stock}
          onChange={handleChange}
          placeholder="Stock"
          type="number"
          required
          style={inputStyle}
        />
        <input
          name="category"
          value={book.category}
          onChange={handleChange}
          placeholder="Category"
          required
          style={inputStyle}
        />
        <button
          type="submit"
          style={buttonStyle}
          onMouseOver={buttonHover}
          onMouseOut={buttonOut}
        >
          Update Book
        </button>
      </form>
    </div>
  );
}
