import React from "react";
import { useState } from "react";
import axios from "axios";

function AddFriend() {
  const [friend, setFriend] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setFriend({ ...friend, [e.target.name]: e.target.value });
    console.log(friend);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    axios
      .post(`http://localhost:9000/api/friends`, friend, {
        headers: {
          authorization: token,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form className="add-friend" onSubmit={onSubmit}>
        <h1>ADD FRIEND.</h1>
        <div>
          <label htmlFor="friendname">FRIEND NAME: </label>
          <br />
          <input
            onChange={handleChange}
            name="name"
            placeholder="Name Required.."
          />
        </div>
        <div>
          <label htmlFor="friendname">FRIEND EMAIL: </label>
          <br />
          <input
            onChange={handleChange}
            name="email"
            placeholder="Email Required.."
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
export default AddFriend;
