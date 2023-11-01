import Navbar from "../components/Navbar/Navbar";
import "./Application.css";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState();
  // const [name, setName] = useState("");
  const [password, setPassword] = useState();
  const [passwordTrue, setPasswordTrue] = useState(false);
  const nav = useNavigate();

  // useEffect(() => {
  //   async function getUsers() {
  //     try {
  //       const usersData = await axios.get("http://localhost:3001/getUsers");
  //       setUsers(usersData.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   getUsers();
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // users.filter((user) => {
    //   if (user.email === email) {
    //     console.log(user.name)
    //     // setName(user.name);
    //   }
    // });
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        if (result.data.authenticated) {
          localStorage.setItem("AuthUser", JSON.stringify(result.data.user));
          nav("/");
          window.location.reload();
        } else {
          setPasswordTrue(true);
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
              {
                <span style={{ color: "red", fontSize: "13px", margin: "0" }}>
                  {passwordTrue ? "Password is Incorrect" : ""}
                </span>
              }
            </div>

            {/* /////////PASSWORD/////////////// */}
            <button>Login</button>
          </form>
          <p>
            Do not Have an Account
            <Link to="/signup" className="btn-login">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
