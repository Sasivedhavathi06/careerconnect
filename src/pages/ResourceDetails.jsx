import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ResourceDetails.css";

function ResourceDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;

  if (!data) {
    return <h2>No Resource Found</h2>;
  }

  return (
    <div className="details-page">
      <h1>{data.title}</h1>
      <p><strong>Description:</strong> {data.full}</p>
      <p><strong>Special Features:</strong> {data.special}</p>

      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}

export default ResourceDetails;