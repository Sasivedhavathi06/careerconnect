import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookSession() {
  const [form, setForm] = useState({
    name: "",
    date: "",
    time: "",
  });

  const [message, setMessage] = useState("");
  const [showQuiz, setShowQuiz] = useState(false);
  const [lastBooking, setLastBooking] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.date || !form.time) {
      setMessage("Please fill all fields");
      return;
    }

    const existingSessions =
      JSON.parse(localStorage.getItem("sessions")) || [];

    // ✅ Prevent Double Booking
    const alreadyBooked = existingSessions.find(
      (session) =>
        session.date === form.date && session.time === form.time
    );

    if (alreadyBooked) {
      setMessage("This slot is already booked. Please choose another.");
      return;
    }

    const newSession = {
      id: Date.now(),
      name: form.name,
      date: form.date,
      time: form.time,
      status: "Pending",
    };

    const updatedSessions = [...existingSessions, newSession];

    localStorage.setItem("sessions", JSON.stringify(updatedSessions));

    setLastBooking(newSession);
    setMessage("Session booked successfully!");
    setShowQuiz(true);
    setForm({ name: "", date: "", time: "" });
  };

  const handleCancelAll = () => {
    localStorage.removeItem("sessions");
    setMessage("All sessions cancelled.");
    setShowQuiz(false);
    setLastBooking(null);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Book a Career Session</h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label>Select Date</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label>Select Time</label>
            <select
              name="time"
              value={form.time}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="">Select Time</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="2:00 PM">2:00 PM</option>
              <option value="4:00 PM">4:00 PM</option>
            </select>
          </div>

          <button type="submit" style={styles.button}>
            Book Now
          </button>

          {message && <p style={styles.message}>{message}</p>}
        </form>

        {/* ✅ Booking Summary */}
        {lastBooking && message === "Session booked successfully!" && (
          <div style={styles.summary}>
            <h4>Booking Details</h4>
            <p><strong>Name:</strong> {lastBooking.name}</p>
            <p><strong>Date:</strong> {lastBooking.date}</p>
            <p><strong>Time:</strong> {lastBooking.time}</p>
          </div>
        )}

        {/* ✅ Cancel All Bookings */}
        {lastBooking && (
          <button
            onClick={handleCancelAll}
            style={{ ...styles.cancelButton }}
          >
            Cancel All Bookings
          </button>
        )}

        {/* ✅ Quiz Button */}
        {showQuiz && (
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <button
              onClick={() => navigate("/quiz")}
              style={styles.quizButton}
            >
              Take Career Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(135deg, #1e3c72, #2a5298)",
  },
  card: {
    background: "#fff",
    padding: "40px",
    borderRadius: "12px",
    width: "350px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  inputGroup: {
    marginBottom: "15px",
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    marginTop: "5px",
  },
  button: {
    padding: "12px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#667eea",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "10px",
  },
  message: {
    marginTop: "15px",
    textAlign: "center",
    color: "green",
    fontWeight: "bold",
  },
  summary: {
    marginTop: "15px",
    padding: "10px",
    backgroundColor: "#f0f4ff",
    borderRadius: "6px",
  },
  cancelButton: {
    marginTop: "10px",
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "red",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    width: "100%",
  },
  quizButton: {
    padding: "10px 20px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "green",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default BookSession;