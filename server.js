const express = require("express");
const path = require("path");
const scraper = require("./course-scrape");
const app = express();

const PORT = 5000;

app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "client", "public")));

app.get("/search", async (req, res) => {
  //parameter req.params.query
  const course = req.query;
  //   res.send(course.course);
  const courses = await scraper(course.course);

  res.json(courses);
});

app.listen(PORT || 3000);

console.log("Server up and running at " + PORT);
