import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";
import "./NavbarHome.css";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { HashLink as Link } from "react-router-hash-link";
import BasicModal from "../nnn";

const NavbarHome = () => {
  const nav = useNavigate();
  const [userIn, setUserIn] = useState("");
  const [user, setUser] = useState("");
  const [showOption, setShowOPtion] = useState(false);

  const showMenu = () => {
    if (!showOption) {
      document.querySelector(".setting-dropdown").style.display = "block";
      setShowOPtion(true);
    } else {
      document.querySelector(".setting-dropdown").style.display = "none";
      setShowOPtion(false);
    }
  };

  useEffect(() => {
    const AuthUser = localStorage.getItem("AuthUser");
    const nameUser = JSON.parse(AuthUser);
    setUser(nameUser)
    setUserIn(nameUser.name);
  }, []);

  const logOut = () => {
    localStorage.removeItem("AuthUser");
    nav("/login");
  };
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
      </div>
      <button style={{ width: "70px" }} className="setting" onClick={showMenu}>
        <SettingsIcon />
      </button>
      <div className="setting-dropdown">
        <CloseIcon className="close" onClick={showMenu} />
        <p>
          <AccountCircleIcon
            style={{ fontSize: "40px", marginRight: "10px" }}
          />
          {userIn}
          <BasicModal data={user}/>
        </p>
        {/* <button>Dark-Mode</button> */}
        <div className="link-holder-one">
          <Link className="link-1" to="#about" onClick={showMenu}>
            About Us
          </Link>
          <Link className="link-1" to="#trustees" onClick={showMenu}>
            Trustees
          </Link>
          <Link className="link-1" to="#contact" onClick={showMenu}>
            Contact
          </Link>
        </div>
        {/* <button>Delete Account</button> */}
        <button onClick={logOut}>
          <LogoutIcon /> LogOut
        </button>
      </div>
      <button className="menu" onClick={showMenu}>
        <MenuIcon />
      </button>
    </nav>
  );
};

export default NavbarHome;
