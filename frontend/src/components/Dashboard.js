import React from "react";

function Dashboard({ leads }) {

  const total = leads.length;
  const newLeads = leads.filter(l => l.status === "New").length;

  return (
    <div>
      <h1>Dashboard</h1>

      <div style={{display:"flex",gap:"20px"}}>

        <div style={{background:"#f3f4f6",padding:"20px"}}>
          <h3>Total Leads</h3>
          <p>{total}</p>
        </div>

        <div style={{background:"#f3f4f6",padding:"20px"}}>
          <h3>New Leads</h3>
          <p>{newLeads}</p>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;