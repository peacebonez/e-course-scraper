const puppeteer = require("puppeteer");

const query = "javascript";

(async () => {
  const COURSERA = "https://www.coursera.org/search";
  const UDEMY = "https://www.udemy.com/";
  const EDX = "https://www.edx.org/";
  const MIT = "https://ocw.mit.edu/";

  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  //coursera
  try {
    await page.goto(COURSERA, { waitUntil: "load" });

    //wait for input elements to load
    await page.waitForSelector("input");
  } catch (err) {
    console.error(err);
    await browser.close();
  }

  const courseraInput = (await page.$$(".react-autosuggest__input"))[1];
  await courseraInput.type(query);
  await courseraInput.type(String.fromCharCode(13));

  await page.waitFor(800);
  const courseraList = await page.$$(".ais-InfiniteHits-item");
  //   console.log(courseraList);

  let courseraCourses = [];
  for (let item of courseraList) {
    const link = await item
      .$eval("a", (a) => a.href)
      .catch((err) => console.log("no link"));

    // console.log(link);

    const courseName = await item
      .$eval("h2", (name) => name.textContent)
      .catch((err) => console.log("no course name"));

    // console.log(courseName);

    const partnerName = await item
      .$eval(".partner-name", (name) => name.textContent)
      .catch((err) => console.log("no partner name"));

    // console.log(partnerName);

    const image = await item
      .$eval(".image-wrapper img", (img) => img.src)
      .catch((err) => console.log("no image"));

    // console.log(image);

    const courseraItem = {
      courseName,
      partnerName,
      image,
      link,
    };

    courseraCourses = [...courseraCourses, courseraItem];
  }

  console.log(courseraCourses);

  return;

  //udemy

  //EDX

  //MIT

  await browser.close();
})();
