import React, { useState } from "react";
import axios from "axios";

function AddLead() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submit = async () => {

    try {

      const res = await axios.post("/api/leads", {
        name,
        email,
        status: "New"
      });

      console.log(res.data);

      alert("Lead Added");

      setName("");
      setEmail("");

    } catch (error) {

      console.error("API Error:", error);

      alert("Error connecting to backend");

    }
  };

  return (
    <div>

      <h3>Add Lead</h3>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={submit}>Add</button>

    </div>
  );
}

export default AddLead;