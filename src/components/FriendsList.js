import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

function FriendsList() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`http://localhost:9000/api/friends`, {
        headers: {
          authorization: token,
        },
      })
      .then((res) => setFriends(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <div className="friends-container">
      <h2>Friends List.</h2>
      <ul className="friends-list">
        {friends.map((friend) => {
          return (
            <li className="friend">
              {friend.name} - {friend.age} - {friend.email}
            </li>
          );
        })}
        <li className="friend">Name - age - email</li>
        <li className="friend">Name - age - email</li>
        <li className="friend">Name - age - email</li>
        <li className="friend">Name - age - email</li>
      </ul>
    </div>
  );
}
export default FriendsList;
