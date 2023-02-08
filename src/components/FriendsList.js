import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

function FriendsList() {
  const [friends, setFriends] = useState([]);

  return (
    <div>
      <h2>FriendsList</h2>
      <ul>
        <li>Name - age - email</li>
        <li>Name - age - email</li>
        <li>Name - age - email</li>
        <li>Name - age - email</li>
      </ul>
    </div>
  );
}
export default FriendsList;
