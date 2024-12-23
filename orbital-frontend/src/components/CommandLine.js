import React, { useState } from "react";

const CommandLine = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({ email: "", password: "", role: "" });

  const questions = [
    { question: "Enter your Astronaut ID (email):", key: "email" },
    { question: "Set your Access Code (password):", key: "password" },
    { question: "Confirm your mission role (Login/Signup):", key: "role" },
  ];

  const handleInput = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      setFormData({ ...formData, [questions[step].key]: e.target.value.trim() });
      e.target.value = ""; 
      if (step < questions.length - 1) {
        setStep(step + 1);
      } else {
        onComplete(formData); 
      }
    }
  };

  return (
    <div className="cli-container">
      {questions.slice(0, step).map((q, index) => (
        <p key={index}>
          <span style={{ color: "#0f0" }}>{q.question}</span> {formData[q.key]}
        </p>
      ))}
      <div className="cli-text">
        <p className="typewriter">{questions[step].question}</p>
        <input
          type="text"
          className="cli-input"
          autoFocus
          onKeyDown={handleInput}
        />
      </div>
    </div>
  );
};

export default CommandLine;
