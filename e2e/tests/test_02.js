const psp5 = browser.page.scenario_01();
const smarttv = browser.page.scenario_02();
const baseUrl = browser.baseUrl;

describe('Smart TV validate search results', () => {
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
    await psp5.setValue('@mainSearchbar', 'smart tv')
    await psp5.click('@searchButton')
    psp5.pause(5000)
})

it('Validate search results', async (browser) => {
    await smarttv.assert.textContains('@sizeFilter','Tamaño')
    await smarttv.assert.textContains('@priceFilter','Precios')
    smarttv.pause(2000)
})

it('Filter the results', async(browser) => {
    await smarttv.waitForElementVisible('@searchBrands',5000,'Select brand option found')
    await smarttv.click('@searchBrands')
    await smarttv.setValue('@searchBrands', 'sony')
    await smarttv.click('@sonyBrandField')
    await smarttv.waitForElementVisible('@minPriceText',5000,'> $10,000 option found')
    await smarttv.assert.textContains('@minPriceText','Mas de $10000.0')
    await smarttv.click('@selectPriceField')
    smarttv.pause(5000)
    //await smarttv.waitForElementVisible('@selectSize',5000,'Select 55size option found')
    await smarttv.click('@selectSize',"Select Size added")
    smarttv.pause(2000)
    await smarttv.waitForElementVisible('@numberResult',5000,'Number of results found' )
    await smarttv.getText('@numberResult', function(result) {
        const numberExpected = result.value;
        console.log(numberExpected)
        this.assert.equal(numberExpected,'(5 resultados)',"Si son 5 resultados");
    })
    //await smarttv.assert.textContains('@numberResult','(5 resultados)','Si son 5 resultados')
    smarttv.pause(5000)

})

after((browser) =>

{
console.log('End of test steps');
browser.end()
}
);
});