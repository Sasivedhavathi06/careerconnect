import { useState } from "react";

function CareerRecommendation() {
  const [career, setCareer] = useState("");

  const getRecommendation = (interest) => {
    if (interest === "Designing") {
      return {
        title: "Arts / Design",
        match: "88%",
        description:
          "You have strong creativity and visual thinking skills. Careers in UI/UX, Graphic Design, and Animation suit you.",
      };
    }

    if (interest === "Entrepreneurship") {
      return {
        title: "Business / Startup",
        match: "85%",
        description:
          "You have leadership and risk-taking ability. Business Management and Startup roles are suitable.",
      };
    }

    return {
      title: "",
      match: "",
      description: "",
    };
  };

  const handleClick = (interest) => {
    const result = getRecommendation(interest);
    setCareer(result);
  };

  return (
    <div style={styles.container}>
      <h2>AI Career Recommendation</h2>

      <button onClick={() => handleClick("Designing")}>
        Get Recommendation
      </button>

      {career && (
        <div style={styles.card}>
          <h3>Recommended Career: {career.title}</h3>
          <p><strong>Match Score:</strong> {career.match}</p>
          <p>{career.description}</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
  },
  card: {
    marginTop: "20px",
    padding: "20px",
    borderRadius: "10px",
    background: "#f4f9ff",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
  },
};

export default CareerRecommendation;