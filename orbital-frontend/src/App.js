import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css"; 
import Hero from "./components/Hero";
import WelcomeScreen from "./components/WelcomeScreen";
import CommandLine from "./components/CommandLine";
import Dashboard from "./components/Dashboard";
import ProfilePage from "./components/ProfilePage";
import BlogPage from "./components/BlogPage";
import BlogFeed from "./components/BlogFeed";

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
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blogFeed" element={<BlogFeed />} />
        
      </Routes>
    </Router>
  );
}

export default App;
