const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const dirPath = path.join(__dirname, "../build");
console.log(dirPath);
app.use(cors());
app.use(express.static(dirPath));

app.get("/", (req, res) => {
  res.sendFile(dirPath + "/index.html");
});

app.listen(3000, () => {
  console.log("Server running port 3000");
});
