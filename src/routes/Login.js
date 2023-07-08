import React, { useState } from "react";
import { Link, Form, useNavigate } from "react-router-dom";
import Posts from "./before/Posts";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const users = [
    { username: "user1", password: "user1@123" },
    { username: "user2", password: "user2@123" }
  ];
  const navigate = useNavigate();
  function authUser(e) {
    e.preventDefault();
    let user = users.filter((use) => use.username === username);
    if (user.length < 1) {
      alert("User is not registered");
      navigate("/login");
      return;
    }
    if (user[0].password === password) {
      navigate(`/${user[0].username}`);
    } else {
      return alert("Password is incorrect");
    }
  }
  return (
    <>
      <Posts />
      <div className="popup-container">
        <div className="popup">
          <span className="close">
            <Link to="/">
              <box-icon name="x"></box-icon>
            </Link>
          </span>
          <h1>Log In</h1>
          <p>
            By continuing, you are setting up a Reddit account and agree to our
            User Agreement and Privacy Policy.
          </p>
          <Form method="post">
            <div className="inputbox">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <label htmlFor="username">Username</label>
            </div>
            <div className="inputbox">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label htmlFor="password">Password</label>
            </div>
            <button type="submit" className="btnn" onClick={authUser}>
              Log In
            </button>
          </Form>
        </div>
        <div className="overlay"></div>
      </div>
    </>
  );
}
