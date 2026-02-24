import React, { useEffect, useState } from "react";

function CounsellorDashboard() {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const storedSessions =
      JSON.parse(localStorage.getItem("sessions")) || [];
    setSessions(storedSessions);
  }, []);

  const updateStatus = (id, newStatus) => {
    const updatedSessions = sessions.map((session) =>
      session.id === id ? { ...session, status: newStatus } : session
    );

    setSessions(updatedSessions);
    localStorage.setItem("sessions", JSON.stringify(updatedSessions));
  };

  const deleteSession = (id) => {
    const filteredSessions = sessions.filter(
      (session) => session.id !== id
    );

    setSessions(filteredSessions);
    localStorage.setItem("sessions", JSON.stringify(filteredSessions));
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Counsellor Dashboard</h2>

      {sessions.length === 0 ? (
        <p>No session requests available.</p>
      ) : (
        <table
          style={{
            width: "100%",
            marginTop: "20px",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#333", color: "white" }}>
              <th style={tableStyle}>Name</th>
              <th style={tableStyle}>Date</th>
              <th style={tableStyle}>Time</th>
              <th style={tableStyle}>Status</th>
              <th style={tableStyle}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((session) => (
              <tr key={session.id}>
                <td style={tableStyle}>{session.name}</td>
                <td style={tableStyle}>{session.date}</td>
                <td style={tableStyle}>{session.time}</td>
                <td
                  style={{
                    ...tableStyle,
                    color:
                      session.status === "Approved"
                        ? "green"
                        : session.status === "Rejected"
                        ? "red"
                        : "orange",
                    fontWeight: "bold",
                  }}
                >
                  {session.status}
                </td>
                <td style={tableStyle}>
                  <button
                    onClick={() => updateStatus(session.id, "Approved")}
                    style={approveBtn}
                  >
                    Approve
                  </button>

                  <button
                    onClick={() => updateStatus(session.id, "Rejected")}
                    style={rejectBtn}
                  >
                    Reject
                  </button>

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

const tableStyle = {
  border: "1px solid #ccc",
  padding: "10px",
  textAlign: "center",
};

const approveBtn = {
  backgroundColor: "green",
  color: "white",
  border: "none",
  padding: "5px 10px",
  marginRight: "5px",
  cursor: "pointer",
};

const rejectBtn = {
  backgroundColor: "red",
  color: "white",
  border: "none",
  padding: "5px 10px",
  marginRight: "5px",
  cursor: "pointer",
};

const deleteBtn = {
  backgroundColor: "black",
  color: "white",
  border: "none",
  padding: "5px 10px",
  cursor: "pointer",
};

export default CounsellorDashboard;