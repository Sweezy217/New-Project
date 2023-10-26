import React from "react";
import "./SetDropDown.css";
import { Link } from "react-router-dom";

const SetDropDown = () => {
  return (
    <div className="setting-dropdown">
      <button>Dark-Mode</button>
      <button>Delete Account</button>
      <Link to="/login">LogOut</Link>
    </div>
  );
};

export default SetDropDown;
