import React, { useState, useEffect } from "react";

function CareerQuiz() {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState("");

  useEffect(() => {
    const savedResult = localStorage.getItem("careerResult");
    if (savedResult) {
      setResult(savedResult);
    }
  }, []);

  const questions = [
    {
      id: 1,
      question: "Which subject do you like most?",
      options: ["Math", "Biology", "Business", "Arts"],
    },
    {
      id: 2,
      question: "What type of work do you enjoy?",
      options: ["Problem Solving", "Helping People", "Managing", "Creative Work"],
    },
    {
      id: 3,
      question: "Which activity interests you?",
      options: ["Coding", "Medical Care", "Entrepreneurship", "Designing"],
    },
  ];

  const handleChange = (qid, option) => {
    setAnswers({ ...answers, [qid]: option });
  };

  const calculateResult = () => {
    const values = Object.values(answers);

    let recommendation = "";

    if (values.includes("Math") || values.includes("Coding"))
      recommendation = "Engineering / IT";
    else if (values.includes("Biology") || values.includes("Medical Care"))
      recommendation = "Medical Field";
    else if (values.includes("Business") || values.includes("Entrepreneurship"))
      recommendation = "Business / Management";
    else
      recommendation = "Arts / Design";

    setResult(recommendation);
    localStorage.setItem("careerResult", recommendation);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Career Recommendation Quiz</h2>

      {questions.map((q) => (
        <div key={q.id} style={{ marginBottom: "20px" }}>
          <h4>{q.question}</h4>
          {q.options.map((option) => (
            <label key={option} style={{ display: "block" }}>
              <input
                type="radio"
                name={`question-${q.id}`}
                onChange={() => handleChange(q.id, option)}
              />
              {option}
            </label>
          ))}
        </div>
      ))}

      <button onClick={calculateResult}>Get Recommendation</button>

      {result && (
        <h3 style={{ marginTop: "20px", color: "green" }}>
          Recommended Career: {result}
        </h3>
      )}
    </div>
  );
}

export default CareerQuiz;