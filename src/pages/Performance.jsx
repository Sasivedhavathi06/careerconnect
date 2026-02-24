import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Performance() {
  const [sessions, setSessions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    loadSessions();
  }, []);

  const loadSessions = () => {
    const storedSessions =
      JSON.parse(localStorage.getItem("sessions")) || [];
    setSessions(storedSessions);
  };

  const deleteSession = (id) => {
    const updated = sessions.filter((session) => session.id !== id);
    setSessions(updated);
    localStorage.setItem("sessions", JSON.stringify(updated));
  };

  const filteredSessions = sessions.filter((session) =>
    session.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const total = sessions.length;
  const approved = sessions.filter(s => s.status === "Approved").length;
  const rejected = sessions.filter(s => s.status === "Rejected").length;
  const pending = sessions.filter(s => s.status === "Pending").length;

  return (
    <div style={{ padding: "40px" }}>
      <h2>Your Performance Dashboard</h2>

      {/* Summary Section */}
      <div style={summaryContainer}>
        <div style={summaryCard}>Total: {total}</div>
        <div style={{ ...summaryCard, color: "green" }}>
          Approved: {approved}
        </div>
        <div style={{ ...summaryCard, color: "red" }}>
          Rejected: {rejected}
        </div>
        <div style={{ ...summaryCard, color: "orange" }}>
          Pending: {pending}
        </div>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={searchStyle}
      />

      {/* Table */}
      {filteredSessions.length === 0 ? (
        <p>No sessions found.</p>
      ) : (
        <table style={tableStyle}>
          <thead>
            <tr style={{ backgroundColor: "#667eea", color: "white" }}>
              <th style={cellStyle}>Name</th>
              <th style={cellStyle}>Date</th>
              <th style={cellStyle}>Time</th>
              <th style={cellStyle}>Status</th>
              <th style={cellStyle}>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredSessions.map((session) => (
              <tr key={session.id}>
                <td style={cellStyle}>{session.name}</td>
                <td style={cellStyle}>{session.date}</td>
                <td style={cellStyle}>{session.time}</td>
                <td
                  style={{
                    ...cellStyle,
                    fontWeight: "bold",
                    color:
                      session.status === "Approved"
                        ? "green"
                        : session.status === "Rejected"
                        ? "red"
                        : "orange",
                  }}
                >
                  {session.status}
                </td>
                <td style={cellStyle}>
                  <button
                    onClick={() => deleteSession(session.id)}
                    style={deleteBtn}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* ✅ Only Feedback Button */}
      <div style={{ marginTop: "30px" }}>
        <button
          onClick={() => navigate("/feedback")}
          style={feedbackBtn}
        >
          Give Feedback
        </button>
      </div>
    </div>
  );
}

const summaryContainer = {
  display: "flex",
  gap: "20px",
  marginBottom: "20px",
};

const summaryCard = {
  padding: "15px 25px",
  backgroundColor: "#f2f2f2",
  borderRadius: "8px",
  fontWeight: "bold",
};

const searchStyle = {
  padding: "10px",
  width: "250px",
  marginBottom: "20px",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
};

const cellStyle = {
  border: "1px solid #ccc",
  padding: "10px",
  textAlign: "center",
};

const deleteBtn = {
  backgroundColor: "black",
  color: "white",
  border: "none",
  padding: "6px 12px",
  cursor: "pointer",
};

const feedbackBtn = {
  padding: "10px 20px",
  backgroundColor: "green",
  color: "white",
  border: "none",
  cursor: "pointer",
  borderRadius: "5px",
};

export default Performance;