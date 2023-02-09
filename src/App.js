import React, { useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Redirect,
  useNavigate,
} from "react-router-dom";

import Login from "./components/Login";
import AddFriend from "./components/AddFriend";
import FriendsList from "./components/FriendsList";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, []);

  const logOut = () => {
    const token = localStorage.getItem("token");
    localStorage.setItem("token", null);
    navigate("/login");
    return null;
  };

  return (
    <div className="App">
      <header>
        <h1>FRIENDS DATABASE.</h1>
        <Link className="link" to="/login">
          LOGIN.
        </Link>
        <Link className="link" to="/friends">
          FRIENDSLIST.
        </Link>
        <Link className="link" to="/friends/add">
          ADDFRIEND.
        </Link>
        <Link className="link" to="login" onClick={logOut}>
          LOGOUT.
        </Link>
      </header>

      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/login" element={<Login />} />

        <Route exact path="/friends" element={<FriendsList />} />
        <Route exact path="/friends/add" element={<AddFriend />} />
      </Routes>
    </div>
  );
}

export default App;
