const puppeteer = require("puppeteer");

(async (query) => {
  let courses = [];
  const COURSERA = "https://www.coursera.org/search";
  const UDEMY = "https://www.udemy.com/";
  const EDX = "https://www.edx.org/";
  const MIT = "https://ocw.mit.edu/";

  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  //~~~~~~~~~~~~~~~~~~~coursera~~~~~~~~~~~~~~~~~~~

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

    const instructor = await item
      .$eval(".partner-name", (name) => name.textContent)
      .catch((err) => console.log("no partner name"));

    // console.log(instructor);

    const image = await item
      .$eval(".image-wrapper img", (img) => img.src)
      .catch((err) => console.log("no image"));

    // console.log(image);

    const courseraItem = {
      courseName,
      instructor,
      image,
      link,
    };

    courseraCourses = [...courseraCourses, courseraItem];

    //courses = [...courseraCourses, udemyCourses..., edxCourses..., mitCourses...]
  }

  //~~~~~~~~~~~~udemy~~~~~~~~~~~~~~~~

  try {
    await page.goto(UDEMY, { waitUntil: "load" });

    //wait for input elements to load
    await page.waitForSelector("input");
  } catch (err) {
    console.error(err);
    await browser.close();
  }

  const udemyInput = await page.$(".billboard--billboard--3-fQr input");

  await udemyInput.type(query);
  await udemyInput.type(String.fromCharCode(13));

  await page.waitForSelector(".udlite-container");

  const udemyListRaw = [...(await page.$$(".popover--popover--t3rNO"))];
  const udemyList = udemyListRaw.splice(4, udemyListRaw.length - 1);

  //hides an ad interfering with scraping
  const ad = await page
    .$eval(
      ".search--unit-injection--1bANP",
      (ad) => (ad.style.display = "none")
    )
    .catch((err) => console.log("no title"));

  let udemyCourses = [];
  for (let item of udemyList) {
    const courseName = await item
      .$eval(".udlite-focus-visible-target", (title) => title.textContent)
      .catch((err) => console.log("no title"));

    // console.log(courseName);

    const instructor = await item
      .$eval(".udlite-text-xs", (text) => text.textContent)
      .catch((err) => console.log("no instructor"));

    // console.log(instructor);

    const imageRaw = await item
      .$eval(".course-card--course-image--2sjYP", (img) => img.src)
      .catch((err) => console.log("no image"));

    const link = await item
      .$eval("a", (a) => a.href)
      .catch((err) => console.log("no link"));

    const image = imageRaw.startsWith("data") ? "" : imageRaw;

    const udemyItem = {
      courseName,
      instructor,
      image,
      link,
    };

    udemyCourses = [...udemyCourses, udemyItem];
  }

  //~~~~~~~~~~~~~~~~~EDX~~~~~~~~~~~~~~~~~~~~~~~~

  try {
    await page.goto(EDX, { waitUntil: "load" });

    //wait for input elements to load
    await page.waitForSelector("input");
  } catch (err) {
    console.error(err);
    await browser.close();
  }

  const edxInput = await page.$("#home-search");
  await edxInput.type(query);
  await edxInput.type(String.fromCharCode(13));

  //wait for results
  await page.waitForSelector(".d-md-block");

  const edxList = await page.$$(".discovery-card");

  let edxCourses = [];
  for (let item of edxList) {
    const courseName = await item
      .$eval(".name-heading", (title) => title.textContent)
      .catch((err) => console.log("no title"));

    const instructor = await item
      .$eval(".provider", (text) => text.textContent)
      .catch((err) => console.log("no instructor"));

    const image = await item
      .$eval("img", (img) => img.src)
      .catch((err) => console.log("no src"));

    const link = await item
      .$eval("a", (a) => a.href)
      .catch((err) => console.log("no link"));

    const edxItem = {
      courseName,
      instructor,
      image,
      link,
    };

    edxCourses = [...edxCourses, edxItem];
  }

  //MIT

  try {
    await page.goto(MIT, { waitUntil: "load" });

    //wait for input elements to load
    await page.waitForSelector("input");
  } catch (err) {
    console.error(err);
    await browser.close();
  }

  const mitInput = await page.$("#gsc-i-id1");
  await mitInput.type(query);
  await mitInput.type(String.fromCharCode(13));

  //wait for results
  await page.waitForSelector("#resInfo-1");

  const mitList = await page.$$(".gsc-result");

  let mitCourses = [];
  for (let item of mitList) {
    const courseName = await item
      .$eval(".gs-title", (title) => title.textContent)
      .catch((err) => console.log("no title"));

    const image = await item
      .$eval("img", (img) => img.src)
      .catch((err) => console.log("no src"));

    const link = await item
      .$eval(".gs-title a", (a) => a.href)
      .catch((err) => console.log("no link"));

    const mitItem = {
      courseName,
      instructor: "MIT",
      image,
      link,
    };

    mitCourses = [...mitCourses, mitItem];
  }

  courses = [...courseraCourses, ...udemyCourses, ...edxCourses, ...mitCourses];

  console.log(courses);

  // await browser.close();
})("javascript");
