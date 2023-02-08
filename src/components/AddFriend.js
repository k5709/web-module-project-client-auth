import React from "react";
import { useState } from "react";

const handleName = (e) => {
  console.log("name has changed");
  setName(...e.target.value);
};

const handleEmail = (e) => {
  console.log("email changed");
  setEmail(e.target.value);
};

function AddFriend() {
  return (
    <div>
      <h1>ADD FRIEND</h1>
      <form>
        <div>
          <label htmlFor="friendname">FRIEND NAME: </label>
          <input onChange={handleName} />
        </div>
        <div>
          <label htmlFor="friendname">FRIEND EMAIL: </label>
          <input onChange={handleEmail} />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
export default AddFriend;
