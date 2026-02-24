import React from "react";
import { useNavigate } from "react-router-dom";
import "./Resources.css";

function Resources() {
  const navigate = useNavigate();

  const resources = [
    {
      id: "1",
      title: "Career Guidance PDF",
      short: "Complete guide to choosing the right career path."
    },
    {
      id: "2",
      title: "Resume Template",
      short: "Download a professional resume format."
    },
    {
      id: "3",
      title: "Interview Preparation Video",
      short: "Tips and tricks to crack interviews."
    }
  ];

  return (
    <div className="resources-container">
      <h1 className="resources-heading">Learning Resources</h1>

      <div className="resources-grid">
        {resources.map((item) => (
          <div className="resource-card" key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.short}</p>
            <button
              className="explore-btn"
              onClick={() => navigate(`/resource/${item.id}`)}
            >
              Explore
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resources;