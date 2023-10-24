import React, { useState } from "react";
import "../Application.css";
import Navbar from "../components/Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.includes(".")) {
      alert("Email must contain a dot ( . )");
      return;
    }
    axios
      .post("http://localhost:3001/register", { name, email, password })
      .then((result) => {
        console.log("result ==>>", result.data);
        setName(result.data.name);
        setEmail(result.data.email);
        setPassword(result.data.password);
        nav("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="signup">
        <div className="form-holder">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            {/* /////////NAME/////////////// */}
            <div>
              <strong>
                Name: <span>*</span>
              </strong>

              <input
                type="text"
                placeholder="Enter Name"
                autoComplete="off"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            {/* /////////NAME/////////////// */}

            {/* /////////EMAIL/////////////// */}
            <div>
              <strong>
                Email: <span>*</span>
              </strong>

              <input
                type="email"
                placeholder="Enter Email"
                autoComplete="off"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* /////////EMAIL/////////////// */}

            {/* /////////PASSWORD/////////////// */}
            <div>
              <label htmlFor="password">
                <strong>
                  Password: <span>*</span>
                </strong>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* /////////PASSWORD/////////////// */}
            <button>Sign In</button>
          </form>
          <p>Already Have an Account</p>
          <Link to="/login" className="btn-login">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
