import React, { useEffect, useState } from "react";
import "./Application.css";
import Navbar from "../components/Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userExists, setUserExists] = useState(false);
  const [capitalLetter, setCapitalLetter] = useState(false);
  const nav = useNavigate();
  const [users, setUsers] = useState([]);

  // let login = localStorage.getItem("AuthUser");
  // const user = JSON.parse(login);
  // console.log(user)

  useEffect(() => {
    axios
      .get("http://localhost:3001/getUsers")
      .then((users) => setUsers(users.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    let nameSplit = name.split("");
    if (nameSplit[0].toUpperCase() !== name.split("")[0]) {
      return setCapitalLetter(true);
    }

    if (!email.includes(".")) {
      alert("Email must contain a dot ( . )");
      return;
    }

    if (users.length > 0) {
      users.filter((user) => {
        if (user.email === email) {
          setUserExists(true);
        }
      });
    }
    axios
      .post("http://localhost:3001/register", { name, email, password })
      .then((result) => {
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
                min={3}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <span style={{ color: "red", fontSize: "13px", margin: "0" }}>
                {capitalLetter
                  ? "Name Must Begin With a Captital Letter [A-Z]"
                  : ""}
              </span>
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
            <span style={{ color: "red", fontSize: "13px", margin: "0" }}>
              {userExists ? "User already Exists" : ""}
            </span>
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
                required
                minLength="8"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* /////////PASSWORD/////////////// */}
            <button>Sign In</button>
          </form>
          <p>
            Already Have an Account{" "}
            <Link to="/login" className="btn-login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
