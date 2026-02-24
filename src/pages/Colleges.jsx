import React, { useState } from "react";

function Colleges() {
  const [selectedCollege, setSelectedCollege] = useState(null);

  const colleges = [
    {
      name: "IIT",
      desc: "Premier engineering institutes in India.",
      details:
        "IITs are known for world-class faculty, cutting-edge research, global recognition, high placements, and strong alumni networks across the world.",
    },
    {
      name: "NIT",
      desc: "Top government engineering colleges.",
      details:
        "NITs provide quality technical education, excellent infrastructure, strong industry connections, and good placement opportunities.",
    },
    {
      name: "AIIMS",
      desc: "India's leading medical institute.",
      details:
        "AIIMS offers top-tier medical education, advanced hospital facilities, research excellence, and highly competitive admissions.",
    },
    {
      name: "IIM",
      desc: "Prestigious management institutes.",
      details:
        "IIMs are globally recognized for MBA programs, strong corporate connections, leadership training, and excellent salary packages.",
    },
    {
      name: "Delhi University",
      desc: "One of India's top universities.",
      details:
        "Delhi University offers diverse academic programs, strong campus culture, research opportunities, and prestigious colleges under it.",
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Top Colleges</h1>

      <div style={styles.grid}>
        {colleges.map((college, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.nameBox}>{college.name}</div>
            <p style={styles.desc}>{college.desc}</p>

            <button
              style={styles.button}
              onClick={() => setSelectedCollege(college)}
            >
              Explore
            </button>
          </div>
        ))}
      </div>

      {/* DETAILS SECTION */}
      {selectedCollege && (
        <div style={styles.detailsSection}>
          <h2>{selectedCollege.name} - Special Features</h2>
          <p>{selectedCollege.details}</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    padding: "60px 10%",
    background: "linear-gradient(135deg, #141e30, #243b55)",
  },
  title: {
    textAlign: "center",
    color: "#fff",
    marginBottom: "50px",
    fontSize: "34px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "30px",
  },
  card: {
    background: "rgba(255,255,255,0.1)",
    backdropFilter: "blur(10px)",
    padding: "25px",
    borderRadius: "15px",
    color: "#fff",
    boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
  },
  nameBox: {
    backgroundColor: "#00c6ff",
    padding: "10px",
    borderRadius: "8px",
    fontWeight: "bold",
    fontSize: "18px",
    marginBottom: "15px",
    textAlign: "center",
  },
  desc: {
    fontSize: "14px",
    opacity: "0.9",
  },
  button: {
    marginTop: "15px",
    padding: "8px 15px",
    border: "none",
    borderRadius: "6px",
    background: "#ff7e5f",
    color: "#fff",
    cursor: "pointer",
  },
  detailsSection: {
    marginTop: "50px",
    background: "#ffffff",
    padding: "30px",
    borderRadius: "12px",
    color: "#333",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
  },
};

export default Colleges;