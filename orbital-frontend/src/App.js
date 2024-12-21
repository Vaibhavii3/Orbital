// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header"; // Import Header component
import "./App.css"; // Optional global styles

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        {/* <Route path="/about" element={<div>About Page</div>} />
        <Route path="/community" element={<div>Community Page</div>} />
        <Route path="/blog" element={<div>Blog Page</div>} />
        <Route path="/events" element={<div>Events Page</div>} />
        <Route path="/resources" element={<div>Resources Page</div>} />
        <Route path="/join" element={<div>Join Page</div>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
