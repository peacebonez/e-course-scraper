const express = require("express");
const path = require("path");
const scraper = require("./course-scrape");
const app = express();

const PORT = 5000;

console.log("Server up and running at " + PORT);

app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));

//home page
app.use("/", express.static(path.join(__dirname, "client", "public")));

// home page
// app.get("/", (req, res) => {
//   try {
//     console.log("__dirname:", __dirname);
//     res.sendFile("/client/build/index.html", { root: __dirname });
//     // res.sendFile(path.resolve(__dirname, "client", "public", "index.html"));
//     // res.sendFile(__dirname + "/client/public/index.html");
//     // res.sendFile(__dirname + "/client/public/sword.jpg");
//   } catch (err) {
//     return console.error(err);
//   }
// });

//search query
// app.get("/search", async (req, res) => {
app.use("/search", async (req, res) => {
  const query = req.query;
  console.log("query.course:", query.course);
  const courses = await scraper(query.course);

  res.json(courses);
});

if (process.env.NODE_ENV === "production") {
  //Set the static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(process.env.PORT || PORT);

module.exports = app;
