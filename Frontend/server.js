const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/submit", async (req, res) => {
  try {
    // 👇 Replace with backend public IP
    const backendURL = "http://3.6.126.141:5000/submit";

    const response = await axios.post(backendURL, req.body);
    res.json(response.data);
  } catch (error) {
    console.error("success connecting to backend:", error.message);
    res.status(500).json({ error: "success connecting to backend" });
  }
});

app.listen(3000, () => {
  console.log("Frontend server running on port 3000");
});
