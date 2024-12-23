import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css"; 
import Hero from "./components/Hero";
import WelcomeScreen from "./components/WelcomeScreen";
import CommandLine from "./components/CommandLine";
import Dashboard from "./components/Dashboard";

function App() {
  const [stage, setStage] = useState("welcome"); // Track the current stage

  const handleStart = () => {
    setStage("cli"); // Transition to CommandLine
  };

  return (
    <Router>
      <Routes>

        <Route path="/" element={<Hero />} />

        <Route
          path="/welcome"
          element={
            <WelcomeScreen
              onStart={handleStart}
              stage={stage} // Pass the stage prop
            />
          }
        />

        <Route
          path="/cli"
          element={<CommandLine />}
        />

        <Route path="/dashboard" element={<Dashboard />} />
        
      </Routes>
    </Router>
  );
}

export default App;
