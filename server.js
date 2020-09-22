const express = require("express");
const path = require("path");
const scraper = require("./course-scrape");
const app = express();

app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));

//search query
// app.get("/search", async (req, res) => {
app.use("/search", async (req, res) => {
  const query = req.query;
  console.log("query.course:", query.course);
  const courses = await scraper(query.course);

  res.json(courses);
});

//home page
// app.use("/", express.static(path.join(__dirname, "client", "public")));

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

if (process.env.NODE_ENV === "production") {
  //Set the static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server up and running at " + PORT));

module.exports = app;
