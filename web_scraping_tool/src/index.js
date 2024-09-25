
const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');

  const content = await page.content();
  const $ = cheerio.load(content);

  const scrapedData = $('h1').text();
  console.log('Scraped Data:', scrapedData);

  await browser.close();
})();
