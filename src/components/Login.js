import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [creds, setCreds] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    console.log("change occured");
    setCreds({ ...creds, [e.target.name]: e.target.value });
    console.log(creds);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/api/login", creds)
      .then((res) => {
        const token = res.data.token;
        localStorage.setItem("token", token);
        navigate("/friends");
      })
      .catch((err) => console.log(err));
  };

  return (
    <form className="login-form" onSubmit={onSubmit}>
      <h1>LOGIN.</h1>
      <div>
        <label htmlFor="username">USERNAME </label>
        <br />
        <input
          onChange={handleChange}
          name="username"
          type="id"
          placeholder="Username Required.."
        />
      </div>
      <div>
        <label htmlFor="password">PASSWORD </label>
        <br />
        <input
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="Password Required.."
        />
      </div>
      <button>Submit</button>
    </form>
  );
}
export default Login;
