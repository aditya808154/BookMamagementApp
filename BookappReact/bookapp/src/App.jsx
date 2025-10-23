import React from "react";
import AddBook from "./components/AddBook";
import ViewBooks from "./components/ViewBooks";
import UpdateBook from "./components/UpdateBook";
import DeleteBook from "./components/DeleteBook";
import { Link, Routes, Route } from "react-router-dom";

const App = () => {
  const navStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    padding: "15px 0",
    backgroundColor: "#0077cc",
    borderRadius: "8px",
    marginBottom: "30px",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "white",
    fontWeight: "bold",
    padding: "8px 15px",
    borderRadius: "5px",
    transition: "0.3s",
  };

  const linkHover = {
    backgroundColor: "#005599",
  };

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ color: "#333", margin: "20px 0" }}>📚 Book Management App</h1>

      <nav style={navStyle}>
        <Link
          to="/add"
          style={linkStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#005599")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
        >
          Add Book
        </Link>
        <Link
          to="/view"
          style={linkStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#005599")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
        >
          View Books
        </Link>
        
        <Link
          to="/delete"
          style={linkStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#005599")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
        >
          Delete Book
        </Link>
      </nav>

      <div style={{ maxWidth: "800px", margin: "auto" }}>
        <Routes>
          <Route path="/add" element={<AddBook />} />
          <Route path="/view" element={<ViewBooks />} />
          <Route path="/update/:id" element={<UpdateBook />} />
          <Route path="/delete" element={<DeleteBook />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
