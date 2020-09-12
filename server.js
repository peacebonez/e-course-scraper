const express = require("express");
const scraper = require("./course-scrape");
const app = express();

const PORT = 3000;

app.get("/search", async (req, res) => {
  //parameter req.params.query
  const courses = await scraper("algebra");

  res.json(courses);
});

app.listen(PORT || 3000);

console.log("Server up and running at " + PORT);
