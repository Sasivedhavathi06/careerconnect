import { useState } from "react";

function ResumeAnalyzer() {
  const [resume, setResume] = useState("");
  const [score, setScore] = useState(0);
  const [suggestions, setSuggestions] = useState([]);

  const analyzeResume = () => {
    let newScore = 0;
    let tips = [];

    if (resume.includes("project")) newScore += 20;
    else tips.push("Add project experience");

    if (resume.includes("skill")) newScore += 20;
    else tips.push("Add technical skills");

    if (resume.includes("internship")) newScore += 20;
    else tips.push("Mention internships");

    if (resume.length > 200) newScore += 20;
    else tips.push("Add more detailed content");

    if (resume.includes("achievement")) newScore += 20;
    else tips.push("Add achievements with numbers");

    setScore(newScore);
    setSuggestions(tips);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Resume Score Analyzer</h2>

      <textarea
        rows="8"
        cols="50"
        placeholder="Paste your resume content here..."
        onChange={(e) => setResume(e.target.value.toLowerCase())}
      />

      <br /><br />

      <button onClick={analyzeResume}>Analyze Resume</button>

      <h3>Score: {score}/100</h3>

      <ul>
        {suggestions.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </div>
  );
}

export default ResumeAnalyzer;