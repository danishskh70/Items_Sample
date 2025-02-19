const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const cors = require("cors");
const itemRoutes = require("./routes/itemRoutes");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/items", itemRoutes);

const uri = process.env.MONGO;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Connection Error:", err));

app.listen(5000, () => console.log("Server running on port 5000"));