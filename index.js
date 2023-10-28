const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/connectDB");
const app = express();
const port = 5000;
const userRoutes = require("./routes/user");

dotenv.config();
app.use(cors());
app.use(express.json());
connectDB();
app.get("/", (req, res) => {
  res.send("Wysa API");
});
app.use("/api/user", userRoutes);
app.listen(port, () => {
  console.log("Server Running");
});

module.exports = app;
