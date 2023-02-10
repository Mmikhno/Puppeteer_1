let page;

describe("Github page tests", () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("https://github.com/team");
  });

  afterEach(() => {
    page.close();
  });

  test("The h1 header content'", async () => {
    await page.setDefaultTimeout(10000);
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector("h1");
    const title2 = await page.title();
    await expect(title2).toEqual(
      "GitHub for teams · Build like the best teams on the planet · GitHub"
    );
  });

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", (link) => link.getAttribute("href"));
    await expect(actual).toEqual("#start-of-content", { timeout: 6000 });
  });

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
      timeout: 6000,
    });
    const actual = await page.$eval(btnSelector, (link) => link.textContent);
    await expect(actual).toContain("Get started with Team");
  });
});
describe("GitHub Enterprise page test", () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("https://github.com/enterprise");
    await page.setDefaultTimeout(10000);
  });
  afterEach(async () => {
    page.close();
  });
  test("GitHub Enterprise h1 header content", async () => {
    await page.waitForSelector("h1");
    const title2 = await page.title();
    await expect(title2).toEqual(
      "Enterprise · A smarter way to work together · GitHub"
    );
  });
  test("GitHub Enterprise the first link attribute", async () => {
    const actual = await page.$eval("a", (link) => link.getAttribute("href"));
    await expect(actual).toEqual("#start-of-content");
  });

  test("GitHub Enterprise page contains Start a free trial button", async () => {
    const btnSelector = ".btn-mktg.mr-2";
    await page.waitForSelector(btnSelector);
    const actual = await page.$eval(btnSelector, (link) => link.textContent);
    await expect(actual).toContain("Start a free trial");
  });
});
describe("GitHub Startups page test", () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("https://github.com/enterprise/startups");
    await page.setDefaultTimeout(10000);
  });
  afterEach(async () => {
    page.close();
  });
  test("GitHub Startups h1 header content", async () => {
    await page.waitForSelector("h1");
    const title2 = await page.title();
    await expect(title2).toEqual(
      "GitHub for Startups: Build your startup on GitHub · GitHub"
    );
  });
  test("GitHub Startups the first link attribute", async () => {
    const actual = await page.$eval("a", (link) => link.getAttribute("href"));
    await expect(actual).toEqual("#start-of-content");
  });

  test("GitHub Startups page contains Apply now button", async () => {
    const btnSelector = ".btn-mktg.btn-large-mktg";
    await page.waitForSelector(btnSelector);
    const actual = await page.$eval(btnSelector, (link) => link.textContent);
    await expect(actual).toContain("Apply now");
  });
});
describe("GitHub Education page test", () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("https://education.github.com");
    await page.setDefaultTimeout(10000);
  });
  afterEach(async () => {
    page.close();
  });
  test("GitHub Education h1 header content", async () => {
    await page.waitForSelector("h1");
    const title = "h1.h1";
    await page.waitForSelector(title, { visible: true });
    const textInh1 = await page.$eval(title, (item) => item.textContent);
    await expect(textInh1).toEqual("Where future developers meet");
  });

  test("GitHub Education page contains Join Global Campus button", async () => {
    const btnSelector = "[data-v-2b4f4d1e]";
    await page.waitForSelector(btnSelector);
    const actual = await page.$eval(btnSelector, (link) => link.textContent);
    await expect(actual).toContain("Join Global Campus");
  });
});
