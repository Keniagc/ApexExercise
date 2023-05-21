const dior = browser.page.scenario_03();
const smarttv = browser.page.scenario_02();
const baseUrl = browser.baseUrl;

describe( 'Perfum validate search results', () => {
before(async (browser, done) => {
console.log(`baseUrl: ${browser.baseUrl}`);    //investigar las funciones asincronas
//console.log('baseUrl', baseUrl);
//open browser
await browser.navigateTo(browser.baseUrl).waitForElementVisible('body');
console.log('Now run test steps: ');
done();
});

it('Open "categorias" menu', async (browser) => {
    await dior.waitForElementVisible('@categoryMenu',5000,'Category Menu found')
    await dior.moveToElement('@categoryMenu',10,1)
    await dior.waitForElementVisible('@bellezaOption', 5000,'"Belleza" option found')
    await dior.moveToElement('@bellezaOption',10,10)
    await dior.waitForElementVisible('@menPerfumOption',5000,'"Perfumes de hombre" option found')
    await dior.moveToElement('@menPerfumOption',30,1)
    dior.pause(5000)
    await dior.click('@menPerfumOption')
    dior.pause(5000)
})

it('Displayed and filter the results displayed by “Dior” brand', async (browser) => {
    await smarttv.waitForElementVisible('@searchBrands',5000,'Select brand option found')
    await smarttv.click('@searchBrands')
    await smarttv.setValue('@searchBrands', 'Dior')
    await dior.click('@diorBrandField')
    dior.pause(2000)
    await dior.saveScreenshot('./e2e/screenshots/DiorPerfumResults.png')

})

after((browser) =>

{
console.log('End of test steps');
browser.end()
}
);
});