const Item = require('../models/item'); // Ensure it's lowercase

// Fetch all items where value > 10
exports.getAllItems = async (req, res) => {
  try {
    const items = await Item.find({ value: { $gt: 10 } });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: "Error fetching items" });
  }
};

// Add a new item
exports.addItem = async (req, res) => {
  try {
    const { name, value } = req.params;
    const newItem = new Item({ name, value });
    await newItem.save();
    res.json({ message: "Item added successfully", item: newItem });
  } catch (error) {
    res.status(500).json({ message: "Error adding item" });
  }
};

// Delete an item by name and value
exports.deleteItem = async (req, res) => {
  try {
    const { name, value } = req.params;
    const deletedItem = await Item.findOneAndDelete({ name, value });

    if (!deletedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.json({ message: "Item deleted successfully", deletedItem });
  } catch (error) {
    res.status(500).json({ message: "Error deleting item" });
  }
};
