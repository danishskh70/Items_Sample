const mongoose = require("mongoose");
const Item = require("../models/item");

mongoose.connect("mongodb://localhost:27017/fsd_ta_db", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected for Seeding"))
  .catch(err => console.error("MongoDB Connection Error:", err));

const seedData = async () => {
  try {
    await Item.deleteMany(); // Clear previous data
    await Item.insertMany([
      { name: "Item A", value: 15 },
      { name: "Item B", value: 20 },
      { name: "Item C", value: 8 },
      { name: "Item D", value: 30 }
    ]);
    console.log("Sample Data Inserted");
    mongoose.connection.close();
  } catch (error) {
    console.error("Error inserting data:", error);
  }
};

seedData();
