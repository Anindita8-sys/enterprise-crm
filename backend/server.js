const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const authRoutes = require("./routes/auth");
const leadRoutes = require("./routes/leads");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Start message
console.log("Starting server...");

// Connect Database
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/leads", leadRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("CRM Backend Running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});