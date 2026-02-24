import React, { useState } from "react";

function Feedback() {
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");

  const submitFeedback = () => {
    const feedbackData = {
      rating,
      message,
      date: new Date().toLocaleDateString(),
    };

    const existing =
      JSON.parse(localStorage.getItem("feedbacks")) || [];

    localStorage.setItem(
      "feedbacks",
      JSON.stringify([...existing, feedbackData])
    );

    alert("Feedback Submitted Successfully!");
    setRating(0);
    setMessage("");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Give Feedback</h2>

      <div>
        <p>Rate Your Experience:</p>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            style={{
              fontSize: "24px",
              cursor: "pointer",
              color: star <= rating ? "gold" : "gray",
            }}
            onClick={() => setRating(star)}
          >
            ★
          </span>
        ))}
      </div>

      <textarea
        placeholder="Write your feedback..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{
          display: "block",
          marginTop: "20px",
          width: "300px",
          height: "100px",
        }}
      />

      <button
        onClick={submitFeedback}
        style={{ marginTop: "10px", padding: "8px 15px" }}
      >
        Submit
      </button>
    </div>
  );
}

export default Feedback;