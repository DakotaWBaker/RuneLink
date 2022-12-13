import React, { useState } from "react";
import AuthService from "./services/auth.service";
import { useGlobalState } from "./context/GlobalState";
import jwtDecode from "jwt-decode";
import Profile from "./Profile";

const Login = () => {
  const [state, dispatch] = useGlobalState();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    AuthService.login(username, password).then(async (resp) => {
      let data = jwtDecode(resp.access);
      await dispatch({
        currentUserToken: resp.access,
        currentUser: data,
      });
    });
  };

  return (
    <div className="d-flex justify-content-center align-items-center ">
      <div className="col-md-5 p-5 login shadow-sm border rounded-5">
        <h2 className="text-center mb-4">Login</h2>

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label
              htmlFor="Username"
              className="form-label justify-content-center"
            >
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
            <button
              className="btn btn-outline-light"
              type="submit"
              data-bs-dismiss="modal"
            >
              Login
            </button>
            <button className="btn btn-outline-light" data-bs-dismiss="modal">
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
