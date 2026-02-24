import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Login.css";

const Login = () => {
  const [role, setRole] = useState("user");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please enter username and password");
      return;
    }

    // 🔥 This makes login actually work
    login(username, role);

    // Redirect based on role
    if (role === "admin") {
      navigate("/admin");
    } else if (role === "counsellor") {
      navigate("/counsellor");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="login-wrapper">

      {/* Left Side */}
      <div className="login-left"></div>

      {/* Right Side */}
      <div className="login-right">
        <h2>LOGIN TO YOUR ACCOUNT</h2>

        {/* Role Selection */}
        <div className="role-selector">
          <button
            type="button"
            className={role === "user" ? "active" : ""}
            onClick={() => setRole("user")}
          >
            User
          </button>

          <button
            type="button"
            className={role === "counsellor" ? "active" : ""}
            onClick={() => setRole("counsellor")}
          >
            Counsellor
          </button>

          <button
            type="button"
            className={role === "admin" ? "active" : ""}
            onClick={() => setRole("admin")}
          >
            Admin
          </button>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username :</label>
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password :</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;