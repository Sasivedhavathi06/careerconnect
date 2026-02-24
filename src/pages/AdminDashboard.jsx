import React, { useEffect, useState } from "react";

function AdminDashboard() {
  const [sessions, setSessions] = useState([]);

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

  const resetSystem = () => {
    localStorage.removeItem("sessions");
    setSessions([]);
  };

  const total = sessions.length;
  const approved = sessions.filter(s => s.status === "Approved").length;
  const rejected = sessions.filter(s => s.status === "Rejected").length;
  const pending = sessions.filter(s => s.status === "Pending").length;

  return (
    <div style={{ padding: "40px" }}>
      <h2>Admin Control Panel</h2>

      {/* Summary Cards */}
      <div style={summaryContainer}>
        <div style={cardStyle}>Total: {total}</div>
        <div style={{ ...cardStyle, color: "green" }}>
          Approved: {approved}
        </div>
        <div style={{ ...cardStyle, color: "orange" }}>
          Pending: {pending}
        </div>
        <div style={{ ...cardStyle, color: "red" }}>
          Rejected: {rejected}
        </div>
      </div>

      {/* Reset Button */}
      <button onClick={resetSystem} style={resetBtn}>
        Reset All Sessions
      </button>

      {/* Table */}
      {sessions.length === 0 ? (
        <p style={{ marginTop: "20px" }}>No session data available.</p>
      ) : (
        <table style={tableStyle}>
          <thead>
            <tr style={{ backgroundColor: "#222", color: "white" }}>
              <th style={cellStyle}>Name</th>
              <th style={cellStyle}>Date</th>
              <th style={cellStyle}>Time</th>
              <th style={cellStyle}>Status</th>
              <th style={cellStyle}>Action</th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((session) => (
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
    </div>
  );
}

const summaryContainer = {
  display: "flex",
  gap: "20px",
  marginBottom: "20px",
};

const cardStyle = {
  padding: "15px 25px",
  backgroundColor: "#f2f2f2",
  borderRadius: "8px",
  fontWeight: "bold",
};

const tableStyle = {
  width: "100%",
  marginTop: "20px",
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

const resetBtn = {
  marginTop: "10px",
  backgroundColor: "darkred",
  color: "white",
  border: "none",
  padding: "10px 15px",
  cursor: "pointer",
  borderRadius: "5px",
};

export default AdminDashboard;