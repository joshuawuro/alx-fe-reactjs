import { Link } from "react-router-dom";

const navbarStyle = {
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 20px",
  backgroundColor: "#333",
  color: "#fff",
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  padding: "10px",
};

function Navbar() {
  return (
    <nav style={navbarStyle}>
      <div>
        <Link to="/" style={linkStyle}>
          Home
        </Link>
        <Link to="/about" style={linkStyle}>
          About
        </Link>
        <Link to="/services" style={linkStyle}>
          Services
        </Link>
        <Link to="/contact" style={linkStyle}>
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
