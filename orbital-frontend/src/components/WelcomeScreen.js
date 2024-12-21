import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/CLIStyle.css";

const WelcomeScreen = ({ onStart }) => {
  const [showPrompt, setShowPrompt] = useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    setTimeout(() => {
      setShowPrompt(true);
    }, 3000); 
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onStart(); 
      navigate("/cli"); 
    }
  };

  React.useEffect(() => {
    if (showPrompt) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showPrompt]);



  return (
    <div className="cli-container">
      <div className="cli-text">
        <p className="typewriter">Welcome, Traveler.</p>
        {showPrompt && (
          <p className="prompt-text">Press Enter to initiate your journey.</p>
        )}
      </div>
    </div>
  );
};

export default WelcomeScreen;
