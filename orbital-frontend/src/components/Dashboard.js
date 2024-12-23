import React from "react";
import { FaRocket, FaTasks, FaUserAstronaut, FaChartBar } from "react-icons/fa";
import "../style/Dashboard.css";

const Dashboard = () => {
  const userName = "Commander "; // dynamic 

  return (
    <div className="dashboard-container">
      {/* Welcome Section */}
      <div className="dashboard-header">
        <h1>Welcome aboard, {userName}!</h1>
        <p>Your mission starts here. Explore, manage, and achieve your goals.</p>
      </div>

      {/* Navigation Section */}
      <div className="dashboard-navigation">
        <div className="nav-item">
          <FaRocket size={30} />
          <p>Missions</p>
        </div>
        <div className="nav-item">
          <FaTasks size={30} />
          <p>Tasks</p>
        </div>
        <div className="nav-item">
          <FaUserAstronaut size={30} />
          <p>Profile</p>
        </div>
        <div className="nav-item">
          <FaChartBar size={30} />
          <p>Analytics</p>
        </div>
      </div>

      {/* Quick Actions Section */}
      <div className="dashboard-actions">
        <h2>Quick Actions</h2>
        <button className="action-btn">Create New Task</button>
        <button className="action-btn">View Completed Missions</button>
      </div>
    </div>
  );
};

export default Dashboard;
