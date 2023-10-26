import Navbar from "../components/Navbar/Navbar";
import "./Application.css";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const nav = useNavigate();


  console.log(email, password)
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        if (result.data === "Correct") {
          nav("/");
        } else {
          alert(result.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <Navbar />
      <div className="signup">
        <div className="form-holder">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            {/* /////////EMAIL/////////////// */}
            <div className="mb-3">
              <strong>
                Email: <span>*</span>
              </strong>
              <input
                type="email"
                placeholder="Enter Email"
                autoComplete="off"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* /////////EMAIL/////////////// */}

            {/* /////////PASSWORD/////////////// */}
            <div>
              <strong>
                Password: <span>*</span>
              </strong>
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* /////////PASSWORD/////////////// */}
            <button>Login</button>
          </form>
          <p>Do not Have an Account</p>
          <Link to="/signup" className="btn-login">
            Sign Up
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
