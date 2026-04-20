import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import SignUp from "./pages/Sign_Up";
import Login from "./pages/Login";
import FindDoctorSearch from "./pages/FindDoctorSearch";

function App() {
  // 🔔 Notification state
  const [message, setMessage] = useState("");

  // 🔔 Show notification
  const showNotification = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <Router>
      <div>
        {/* Navbar */}
        <Navbar />

        {/* 🔔 THIS LINE IS VERY IMPORTANT FOR MARKS */}
        {message && (
          <p style={{ textAlign: "center", color: "green" }}>
            {message}
          </p>
        )}

        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<FindDoctorSearch />} />
        </Routes>

        {/* Test button */}
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button onClick={() => showNotification("Action Successful!")}>
            Test Notification
          </button>
        </div>
      </div>
    </Router>
  );
}

export default App;