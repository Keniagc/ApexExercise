module.exports = {
  
    elements: {
        //SEARCHBAR
        /*mainSearchbar: { locateStrategy: 'xpath', selector: "//input[@id='mainSearchbar']"},
        searchButton: { locateStrategy: 'xpath', selector: "//button[@class='input-group-text']//i[@class='icon-zoom']"},*/
        
        //SEARCH FILTER
        sizeFilter: { locateStrategy: 'xpath', selector: "//label[contains(text(),'Tamaño')]"},
        priceFilter: { locateStrategy: 'xpath', selector: "//label[contains(text(),'Precios')]"},
        searchBrands: {locateStrategy:'xpath', selector: "//input[@id='search-filter-brands']"},

        //SELECT FILTER
        minPriceText: { locateStrategy: 'xpath', selector: "//body/div[@id='__next']/div[1]/div[1]/div[1]/div[4]/aside[1]/div[1]/div[1]/div[25]/div[2]/div[1]/div[4]/label[1]"},
        selectPriceField: { locateStrategy: 'xpath', selector: "//input[@id='variants.prices.sortPrice-10000-700000']"},
        sonyBrandField: { locateStrategy: 'xpath', selector: "//input[@id='brand-SONY']"},
        selectSize: { locateStrategy: 'xpath', selector: "//input[@id='variants.normalizedSize-55 pulgadas']"},

        //RESULT COUNT 
        numberResult: { locateStrategy: 'xpath', selector: "//span[@class='searchNum-result']"}
    }
} 