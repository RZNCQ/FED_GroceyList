const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // parse JSON body
app.use(express.static("public"));

let groceryList = [];

app.get("/items", (req, res) => {
  res.json(groceryList);
});

app.post("/items", (req, res) => {
  let newItem = {
    id: Date.now(),
    name: req.body.name,
    completed: false,
  };
  groceryList.push(newItem);
  res.status(201).json(newItem);
});

app.put("/items/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let index = groceryList.findIndex((i) => i.id === id);

  if (index !== -1) {
    groceryList[index] = { ...groceryList[index], ...req.body };
    res.json(groceryList[index]);
  } else {
    res.status(404).json({ error: "Item not found" });
  }
});

app.delete("/items/:id", (req, res) => {
  let id = parseInt(req.params.id);
  groceryList = groceryList.filter((i) => i.id !== id);
  res.json({ message: "Deleted successfully" });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
