const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Serve form (similar to Flask Assignment 2)
app.get("/", (req, res) => {
  res.send(`
    <h2>Frontend Form</h2>
    <form action="/submit" method="post">
      <input type="text" name="name" placeholder="Enter your name" /><br/><br/>
      <input type="email" name="email" placeholder="Enter your email" /><br/><br/>
      <input type="number" name="age" placeholder="Enter your age" /><br/><br/>
      <input type="submit" value="Submit" />
    </form>
  `);
});

// Handle form submit and forward to Flask backend
app.post("/submit", async (req, res) => {
  try {
    const response = await axios.post("http://backend:5000/submit", {
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
    });
    res.send(`
      <h3>Response from Backend:</h3>
      <p>${response.data.message}</p>
      <a href="/">Go Back</a>
    `);
  } catch (error) {
    res.send("Error connecting to backend: " + error.message);
  }
});

app.listen(3000, () => {
  console.log("Frontend running at http://localhost:3000");
});
