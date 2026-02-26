import { useState, useEffect } from "react";
import "./CareerRoadmap.css";

function CareerRoadmap() {
  const [career, setCareer] = useState("");
  const [roadmap, setRoadmap] = useState([]);
  const [skills, setSkills] = useState("");
  const [missingSkills, setMissingSkills] = useState([]);
  const [completedSteps, setCompletedSteps] = useState([]);

  const roadmapData = {
    "Software Developer": {
      steps: [
        "Learn HTML, CSS, JavaScript",
        "Master React.js",
        "Learn Node.js & Databases",
        "Build 3 Real Projects",
        "Prepare for Interviews"
      ],
      requiredSkills: ["html", "css", "javascript", "react", "node"],
      resources: [
        "Practice on LeetCode",
        "Build projects on GitHub",
        "Follow React & Node tutorials",
        "Contribute to Open Source"
      ]
    },
    "Data Scientist": {
      steps: [
        "Learn Python",
        "Study Statistics & Mathematics",
        "Learn Machine Learning",
        "Work on Real Datasets",
        "Practice SQL & Data Visualization"
      ],
      requiredSkills: ["python", "statistics", "machine learning", "sql"],
      resources: [
        "Participate in Kaggle",
        "Work on Data Projects",
        "Learn Pandas & NumPy",
        "Build ML Models"
      ]
    }
  };

  useEffect(() => {
    const savedCareer = localStorage.getItem("career");
    const savedSteps = JSON.parse(localStorage.getItem("completedSteps"));

    if (savedCareer) {
      setCareer(savedCareer);
      setRoadmap(roadmapData[savedCareer].steps);
    }

    if (savedSteps) {
      setCompletedSteps(savedSteps);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("career", career);
    localStorage.setItem("completedSteps", JSON.stringify(completedSteps));
  }, [career, completedSteps]);

  const generateRoadmap = () => {
    if (!career) return;
    setRoadmap(roadmapData[career].steps);
    setCompletedSteps([]);
    setMissingSkills([]);
  };

  const checkSkillGap = () => {
    if (!career) return;
    const userSkills = skills.toLowerCase().split(",").map(s => s.trim());
    const required = roadmapData[career].requiredSkills;
    const gap = required.filter(skill => !userSkills.includes(skill));
    setMissingSkills(gap);
  };

  const toggleStep = (step) => {
    if (completedSteps.includes(step)) {
      setCompletedSteps(completedSteps.filter(s => s !== step));
    } else {
      setCompletedSteps([...completedSteps, step]);
    }
  };

  const progress =
    roadmap.length > 0
      ? Math.round((completedSteps.length / roadmap.length) * 100)
      : 0;

  return (
    <div className="career-container">
      <div className="career-card">

        <h2 className="career-title">🚀 Career Builder</h2>

        <div className="top-section">
          <select
            className="career-select"
            value={career}
            onChange={(e) => setCareer(e.target.value)}
          >
            <option value="">Select Career</option>
            <option>Software Developer</option>
            <option>Data Scientist</option>
          </select>

          <button className="generate-btn" onClick={generateRoadmap}>
            Generate
          </button>
        </div>

        {roadmap.length > 0 && (
          <>
            <div className="section">
              <h3 className="section-title">Roadmap Steps</h3>
              <ul className="roadmap-list">
                {roadmap.map((step, index) => (
                  <li key={index}>
                    <input
                      type="checkbox"
                      checked={completedSteps.includes(step)}
                      onChange={() => toggleStep(step)}
                    />
                    {step}
                  </li>
                ))}
              </ul>
            </div>

            <div className="section progress-container">
              <h3 className="section-title">Progress: {progress}%</h3>
              <div className="progress-bar-bg">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            <div className="section">
              <h3 className="section-title">Skill Gap Analyzer</h3>
              <div className="skill-section">
                <input
                  className="skill-input"
                  type="text"
                  placeholder="Enter skills (comma separated)"
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                />
                <button className="skill-btn" onClick={checkSkillGap}>
                  Check
                </button>
              </div>

              <ul>
                {missingSkills.length > 0 ? (
                  missingSkills.map((skill, index) => (
                    <li key={index} className="missing-skill">
                      ❌ Missing: {skill}
                    </li>
                  ))
                ) : (
                  <li className="success-skill">
                    ✅ No major skill gaps
                  </li>
                )}
              </ul>
            </div>

            <div className="section">
              <h3 className="section-title">Suggested Resources</h3>
              <ul className="resource-list">
                {roadmapData[career]?.resources.map((res, index) => (
                  <li key={index}>📚 {res}</li>
                ))}
              </ul>
            </div>
          </>
        )}

      </div>
    </div>
  );
}

export default CareerRoadmap;