import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  redirect,
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
        <Route exact path="/" element={<Login />} />
        <Route
          exact
          path="/login"
          render={() =>
            localStorage.getItem("token") ? <redirect to="/" /> : <Login />
          }
        />

        <Route exact path="/friends" element={<FriendsList />} />
        <Route exact path="/friends/add" element={<AddFriend />} />
      </Routes>
    </div>
  );
}

export default App;
