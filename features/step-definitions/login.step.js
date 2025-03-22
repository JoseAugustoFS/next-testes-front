const { Given, When, Then } = require("@cucumber/cucumber");
const { chromium } = require("playwright");

let browser, page;

Given("que estou na página de login", async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  await page.goto("http://localhost:3000");
});

When('eu digito {string} no campo "Usuário"', async function (usuario) {
  await page.fill('input[placeholder="Usuário"]', usuario);
});

When('eu digito {string} no campo "Senha"', async function (senha) {
  await page.fill('input[placeholder="Senha"]', senha);
});

When('eu clico no botão "Entrar"', async function () {
  await page.click('button:has-text("Entrar")');
});

When('eu clico no botão "Página do Adm"', async function () {
  await page.click('button:has-text("Página do Adm")');
});

Then("eu devo ver a página do ADM", async function () {
  await page.waitForSelector('button:has-text("Página do Adm")');
});
