import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ViewBooks() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = () => {
    fetch("http://localhost:8080/api/book")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      fetch(`http://localhost:8080/api/book/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.text())
        .then(() => {
          alert("Book deleted successfully ✅");
          fetchBooks(); // Refresh the list
        })
        .catch((err) => console.log(err));
    }
  };

  const tableStyle = {
    width: "95%",
    margin: "auto",
    borderCollapse: "collapse",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  };

  const thStyle = {
    backgroundColor: "#0077cc",
    color: "white",
    padding: "10px",
    textAlign: "center",
  };

  const tdStyle = {
    padding: "10px",
    textAlign: "center",
    borderBottom: "1px solid #ddd",
  };

  const headerStyle = {
    textAlign: "center",
    color: "#333",
    margin: "20px 0",
  };

  const buttonStyle = {
    padding: "5px 10px",
    margin: "0 5px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    color: "white",
    fontWeight: "bold",
    transition: "0.3s",
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h2 style={headerStyle}>All Books</h2>
      {books.length === 0 ? (
        <p style={{ textAlign: "center" }}>No books found.</p>
      ) : (
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>ID</th>
              <th style={thStyle}>Title</th>
              <th style={thStyle}>Author</th>
              <th style={thStyle}>Price</th>
              <th style={thStyle}>Stock</th>
              <th style={thStyle}>Category</th>
              <th style={thStyle}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((b) => (
              <tr
                key={b.id}
                style={{ cursor: "pointer" }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#f1f1f1")}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "white")}
              >
                <td style={tdStyle}>{b.id}</td>
                <td style={tdStyle}>{b.title}</td>
                <td style={tdStyle}>{b.author}</td>
                <td style={tdStyle}>{b.price}</td>
                <td style={tdStyle}>{b.stock}</td>
                <td style={tdStyle}>{b.category}</td>
                <td style={tdStyle}>
                  <button
                    style={{ ...buttonStyle, backgroundColor: "#28a745" }}
                    onClick={() => navigate(`/update/${b.id}`)}
                    onMouseOver={(e) => (e.target.style.backgroundColor = "#218838")}
                    onMouseOut={(e) => (e.target.style.backgroundColor = "#28a745")}
                  >
                    Edit
                  </button>
                  <button
                    style={{ ...buttonStyle, backgroundColor: "#dc3545" }}
                    onClick={() => handleDelete(b.id)}
                    onMouseOver={(e) => (e.target.style.backgroundColor = "#c82333")}
                    onMouseOut={(e) => (e.target.style.backgroundColor = "#dc3545")}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
