import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Signup() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    username: "",
    password: "",
    role: "user",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("user", JSON.stringify(formData));
    login(formData.email, formData.role);

    navigate("/dashboard");
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-card">
        <h1 className="signup-title">
          If you are new here, create an account !!!
        </h1>

        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-row">
            <label>Name :</label>
            <input
              type="text"
              name="name"
              required
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <label>Email :</label>
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <label>Number :</label>
            <input
              type="text"
              name="number"
              required
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <label>Username :</label>
            <input
              type="text"
              name="username"
              required
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <label>Password :</label>
            <input
              type="password"
              name="password"
              required
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="create-btn">
            Create
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;