import React, { useState } from "react";
import AuthService from "./services/auth.service";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    passwordConf: "",
    firstName: "",
    lastName: "",
    email: "",
    rsn: "",
  });

  const handleChange = (key, value) => {
    setUser({
      ...user,
      [key]: value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    AuthService.register(user);
  };

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center ">
      <div className="col-md-5 p-5 login shadow-sm border rounded-5">
        <h2 className="text-center mb-4">Register</h2>
        <div className="c-form">
          <form onSubmit={handleRegister}>
            <div>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                onChange={(e) => handleChange("username", e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                onChange={(e) => handleChange("email", e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="pass">Password (8 characters minimum):</label>
              <input
                type="password"
                id="pass"
                name="password"
                minLength="8"
                required
                onChange={(e) => handleChange("password", e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="passConf">Confirm Password:</label>
              <input
                type="password"
                id="passConf"
                name="password"
                minLength="8"
                required
                onChange={(e) => handleChange("passwordConf", e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="fname"
                required
                onChange={(e) => handleChange("firstName", e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lname"
                required
                onChange={(e) => handleChange("lastName", e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="rs">Runescape Name:</label>
              <input
                type="text"
                id="rsn"
                name="rsn"
                required
                onChange={(e) => handleChange("rsn", e.target.value)}
              />
            </div>
            <button
              className="btn btn-outline-light"
              type="submit"
              data-bs-dismiss="modal"
              value="Register"
              disabled={
                user.password &&
                user.password.length >= 8 &&
                user.password === user.passwordConf &&
                user.firstName &&
                user.lastName &&
                user.email &&
                user.rsn
                  ? false
                  : true
              }
            >
              Register
            </button>
          </form>
          <button className="btn btn-outline-light" data-bs-dismiss="modal">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
{
  /* <div className="vh-100 d-flex justify-content-center align-items-center ">
  <div className="col-md-5 p-5 login shadow-sm border rounded-5">
    <h2 className="text-center mb-4">Login</h2>
    <form onSubmit={handleLogin}>
      <div className="mb-3">
        <label htmlFor="Username" className="form-label justify-content-center">
          Username
          </label>
        <input
            type="text"
            id="username"
          
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
      </div>
      <div className="mb-3">
        <label htmlFor="Password" className="form-label">
          Password
          </label>
        <input
            type="password"
            id="pass"
            name="password"
            minLength="8"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
      </div>
      <div className="d-grid">
        <button className="btn btn-outline-light" type="submit">
          Login
        </button>
      </div>
    </form>
  </div>
</div> */
}
export default Register;
