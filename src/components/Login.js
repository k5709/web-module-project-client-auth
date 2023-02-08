import React, { useState } from "react";

const handleChange = (e) => {
  console.log("change occured");
  setFormValues(...e.target.values);
};

// const [username, setUsername] = useState([]);

function Login() {
  return (
    <form className="login-form">
      <h1>LOGIN.</h1>
      <div>
        <label htmlFor="username" className="username">
          USERNAME{" "}
        </label>
        <br />
        <input onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="password" className="password">
          PASSWORD{" "}
        </label>
        <br />
        <input onChange={handleChange} />
      </div>
      <button>Submit</button>
    </form>
  );
}
export default Login;
