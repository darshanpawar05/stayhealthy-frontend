import React, { useState } from "react";

function DoctorCard() {
  const [booked, setBooked] = useState(true);

  const handleCancel = () => {
    setBooked(false);
    alert("Appointment Cancelled");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Doctor Profile</h2>

      <p>Doctor Name: Dr. Sharma</p>
      <p>Specialization: Cardiologist</p>

      {booked ? (
        <button onClick={handleCancel}>Cancel Appointment</button>
      ) : (
        <p style={{ color: "red" }}>Appointment Cancelled</p>
      )}
    </div>
  );
}

export default DoctorCard;