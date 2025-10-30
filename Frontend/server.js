const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ✅ Test route for health check
app.get("/", (req, res) => {
  res.send("Frontend server is running 🚀");
});

// ✅ POST route to forward requests to Flask backend
app.post("/submit", async (req, res) => {
  try {
    // ✅ Use environment variable or fallback to local backend
    const backendURL = process.env.BACKEND_URL || "http://localhost:5000/submit";

    const response = await axios.post(backendURL, req.body);
    res.json(response.data);
  } catch (error) {
    console.error("Error connecting to backend:", error.message);
    res.status(500).json({ error: "Error connecting to backend" });
  }
});

// ✅ Bind to 0.0.0.0 so ECS & Docker can expose it
const PORT = 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Frontend server running on port ${PORT}`);
});
