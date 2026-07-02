const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // parse JSON body
app.use(express.static("public"));

let groceryList = [];

app.get("/items", (req, res) => {
  res.json(groceryList);
});




app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
