import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

// const [friends, setFriends] = useState([]);

// useEffect(() => {
//   axios
//     .get(`/api/friends`)
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// });

function FriendsList() {
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
