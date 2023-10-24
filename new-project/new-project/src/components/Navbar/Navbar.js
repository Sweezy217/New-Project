import SettingsIcon from "@mui/icons-material/Settings";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="home">
        <img src="logo.jpeg" alt="logo" />
      </Link>
      <h1 className="h1">Steps to a brighter future</h1>
    </nav>
  );
};

export default Navbar;
