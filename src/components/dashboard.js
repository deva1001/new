import React from "react";
import {
  FaAppleAlt,
  FaDrumstickBite,
  FaBreadSlice,
  FaPlus,
  FaUser,
} from "react-icons/fa";
import "./dashboard.css"; // We'll extract the CSS to this file

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="header">
        <div className="welcome">
          <h1>
            Welcome, <span style={{ color: "var(--accent)" }}>John Doe</span>
          </h1>
          <p>Track your nutrition and stay healthy</p>
        </div>
        <div className="user-avatar">
          <div
            style={{
              width: "60px",
              height: "60px",
              background: "var(--secondary)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "1.5rem",
            }}
          >
            JD
          </div>
        </div>
      </div>

      <div className="user-stats">
        <div className="stat-card">
          <h3>Email</h3>
          <p>john@example.com</p>
        </div>
        <div className="stat-card">
          <h3>Height</h3>
          <p>175 cm</p>
        </div>
        <div className="stat-card">
          <h3>Weight</h3>
          <p>70 kg</p>
        </div>
        <div className="stat-card">
          <h3>Goal</h3>
          <p>Maintain Weight</p>
        </div>
      </div>

      <div className="calorie-progress">
        <div className="progress-header">
          <h2>Daily Calories</h2>
          <h2>1800 / 2200 kcal</h2>
        </div>
        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
        <div className="progress-details">
          <span>Consumed</span>
          <span>Remaining: 400 kcal</span>
        </div>
      </div>

      <div className="food-log">
        <h2>Today's Food Log</h2>
        <div className="food-items">
          <div className="food-item">
            <span className="food-name">
              <FaAppleAlt
                style={{ color: "var(--warning)", marginRight: "0.5rem" }}
              />
              Banana
            </span>
            <span className="food-calories">100 kcal</span>
          </div>
          <div className="food-item">
            <span className="food-name">
              <FaDrumstickBite
                style={{ color: "var(--danger)", marginRight: "0.5rem" }}
              />
              Chicken Breast
            </span>
            <span className="food-calories">250 kcal</span>
          </div>
          <div className="food-item">
            <span className="food-name">
              <FaBreadSlice
                style={{ color: "var(--warning)", marginRight: "0.5rem" }}
              />
              Rice
            </span>
            <span className="food-calories">200 kcal</span>
          </div>
        </div>

        <div className="add-food">
          <FaPlus />
          <span>Add Food Item</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
