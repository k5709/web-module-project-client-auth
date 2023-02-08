import React, { useState, useEffect } from "react";
import axios from "axios";

function Login() {
  const [creds, setCreds] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    console.log("change occured");
    setCreds({ ...creds, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submit clicked");
    axios
      .post(`http://localhost:3000/api/login`, creds)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <form className="login-form" onSubmit={onSubmit}>
      <h1>LOGIN.</h1>
      <div>
        <label htmlFor="username">USERNAME </label>
        <br />
        <input onChange={handleChange} name="username" />
      </div>
      <div>
        <label htmlFor="password">PASSWORD </label>
        <br />
        <input onChange={handleChange} name="password" />
      </div>
      <button>Submit</button>
    </form>
  );
}
export default Login;
