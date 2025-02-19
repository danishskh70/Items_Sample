const fs = require("fs");
fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) return console.error("Error reading file:", err);
  fs.writeFile("output.txt", data.toUpperCase(), (err) => {
    if (err) return console.error("Error writing file:", err);
    console.log("File processed and saved as output.txt");
  });
});