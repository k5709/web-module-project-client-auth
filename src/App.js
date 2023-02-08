import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
  Link,
} from "react-router-dom";

import Login from "./components/Login";
import AddFriend from "./components/AddFriend";
import FriendsList from "./components/FriendsList";

function App() {
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
        <Link className="link" to="friends">
          LOGOUT.
        </Link>
      </header>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/friends" element={<FriendsList />} />
        <Route path="/friends/add" element={<AddFriend />} />
      </Routes>
    </div>
  );
}

export default App;
