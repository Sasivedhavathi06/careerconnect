import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-card">
        <h1>About CareerConnect</h1>

        <p>
          CareerConnect is a smart career guidance platform designed to help
          students explore career opportunities, choose the right path, and
          connect with professional counsellors.
        </p>

        <h3>Our Mission</h3>
        <p>
          To guide students in making informed career decisions through
          personalized resources, expert counselling, and performance tracking.
        </p>

        <h3>What We Provide</h3>
        <ul>
          <li>✔ Career Path Exploration</li>
          <li>✔ College Information</li>
          <li>✔ Career Guidance Sessions</li>
          <li>✔ Resume & Interview Resources</li>
          <li>✔ Career Quiz & Performance Tracking</li>
        </ul>

        <h3>Why Choose Us?</h3>
        <p>
          We combine technology and expert knowledge to provide a complete
          student-focused career development solution.
        </p>
      </div>
    </div>
  );
}

export default About;