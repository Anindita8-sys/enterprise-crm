import React from "react";

function Sidebar() {
  return (
    <div style={{
      width: "200px",
      height: "100vh",
      background: "#1f2937",
      color: "white",
      padding: "20px"
    }}>
      <h2>CRM</h2>
      <p>Dashboard</p>
      <p>Leads</p>
      <p>Analytics</p>
    </div>
  );
}

export default Sidebar;