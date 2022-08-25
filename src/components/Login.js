import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (username === "navtech" && password === "Navtech@123") {
      setError("");
      navigate("/home");
    } else {
      setError("*Invalid login credentials");
    }
  };

  return (
    <div className="bg-light vh-100 d-flex align-items-center">
      <div className="container w-25 h-50 d-flex flex-column justify-content-center bg-white">
        <h3 className="text-center mb-4 text-primary">Login to your account</h3>
        <input
          type="text"
          className="form-control mt-2"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          placeholder="Username"
          required
        />
        <input
          type="password"
          className="form-control mt-2"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
          required
        />
        <p className="text-left mt-2 text-danger">{error}</p>
        <div className="text-left">
          <label>
            <input type="checkbox" value="rememberMe" id="rememberMe" />{" "}
            Remember me?
          </label>
        </div>
        <button
          className="btn btn-lg btn-primary btn-block mt-3"
          onClick={handleSubmit}
          type="submit"
        >
          Login
        </button>
      </div>
    </div>
  );
}
