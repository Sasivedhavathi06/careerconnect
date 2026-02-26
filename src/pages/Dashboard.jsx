import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Welcome to Your Portal</h1>

      <div className="cards-container">
        <div className="card" onClick={() => navigate("/careers")}>
          Career Options
        </div>

        <div className="card" onClick={() => navigate("/book")}>
          Book a Session
        </div>

        <div className="card" onClick={() => navigate("/colleges")}>
          View Colleges
        </div>

        <div className="card" onClick={() => navigate("/guidance")}>
          Career Guidance
        </div>

        <div className="card" onClick={() => navigate("/resources")}>
          Resources
        </div>

        <div className="card" onClick={() => navigate("/performance")}>
          Performance
        </div>

        {/* ✅ NEWLY ADDED FEATURES */}

        <div className="card" onClick={() => navigate("/roadmap")}>
          Career Builder
        </div>

        <div className="card" onClick={() => navigate("/resume-analyzer")}>
          Resume Checker
        </div>

      </div>
    </div>
  );
}

export default Dashboard;