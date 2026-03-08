import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

function Charts({ leads }) {

  const data = [
    { name: "New", value: leads.filter(l => l.status === "New").length },
    { name: "Contacted", value: leads.filter(l => l.status === "Contacted").length },
    { name: "Closed", value: leads.filter(l => l.status === "Closed").length }
  ];

  return (
    <BarChart width={400} height={250} data={data}>
      <XAxis dataKey="name"/>
      <YAxis/>
      <Tooltip/>
      <Bar dataKey="value"/>
    </BarChart>
  );
}

export default Charts;