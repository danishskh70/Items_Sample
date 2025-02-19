const express = require("express");
const { getAllItems, addItem, deleteItem } = require("../controllers/itemControllers");
const router = express.Router();

router.get("/", getAllItems);
router.post("/add/:name/:value", addItem);
router.delete("/delete/:name/:value", deleteItem); // <-- DELETE route

module.exports = router;
