import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";
import "./NavbarHome.css";
import { HashLink as Link } from "react-router-hash-link";
import SetDropDown from "../SetDropDown/SetDropDown";

const NavbarHome = () => {

  return (
    <nav className="navbar">
      <a href="/" className="home">
        <img src="logo.jpeg" alt="logo" />
      </a>
      <div className="link-holder">
        <Link className="link" to="#about">
          About Us
        </Link>
        <Link className="link" to="#trustees">
          Trustees
        </Link>
        <Link className="link" to="#contact">
          Contact
        </Link>
        <Link className="link" to="#getInvoled">
          Get Involved
        </Link>
      </div>
      <button style={{ width: "70px" }} className="setting">
        {/* <SetDropDown /> */}
        <SettingsIcon />
      </button>

      <button className="menu">
        <MenuIcon />
      </button>
    </nav>
  );
};

export default NavbarHome;
