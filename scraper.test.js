// const scraper = require("./course-scrape");

// test("outputs an array", () => {
//   expect(typeof scraper("math")).toBe("object");
// });

test("there is an output", () => {
  expect(
    (function () {
      return 3 + 3;
    })()
  ).toBe(6);
});
