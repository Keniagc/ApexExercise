const psp5 = browser.page.scenario_01();
const baseUrl = browser.baseUrl;

describe('PS5 validate search results', () => {
before(async (browser, done) => {
console.log(`baseUrl: ${browser.baseUrl}`);    //investigar las funciones asincronas
//console.log('baseUrl', baseUrl);
//open browser
await browser.navigateTo(browser.baseUrl).waitForElementVisible('body');
console.log('Now run test steps: ');
done();
});

it('Validates search', async (browser) => {

    await psp5.waitForElementVisible('@mainSearchbar',5000,'Main searchbar found')
    await psp5.waitForElementVisible('@searchButton',5000,'Search button found')
})

it('Make the search', async (browser) =>{

    await psp5.click('@mainSearchbar')
    await psp5.setValue('@mainSearchbar', 'playstation')
    await psp5.click('@searchButton')
    psp5.pause(5000)
})

it('Validate search results', async (browser) => {
    await psp5.waitForElementVisible('@playstationConsoleText',5000,'Playstation5 console found')
    await psp5.assert.textContains('@playstationConsoleText','Consola PlayStation 5 825 GB')
    await psp5.waitForElementVisible('@juego01',5000,'Playstation5 game found')
    await psp5.assert.textContains('@juego01','Grand Theft Auto V Estándar para PS5 físico')
    await psp5.click('@playstationConsoleText')
    await psp5.waitForElementVisible('@psp5Tittle',5000,'Playstation5 tittle found')
    await psp5.assert.textContains('@psp5Tittle','Consola PlayStation 5 825 GB')
    await psp5.waitForElementVisible('@psp5Price',5000,'Playstation5 price found')
    await psp5.assert.textContains('@psp5Price','$12,999')
    psp5.pause(4000)

})

after((browser) =>

{
console.log('End of test steps');
browser.end()
}
);
});