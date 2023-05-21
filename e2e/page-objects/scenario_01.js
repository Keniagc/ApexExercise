module.exports = {
  
    elements: {
        //SEARCHBAR
        mainSearchbar: { locateStrategy: 'xpath', selector: "//input[@id='mainSearchbar']"},
        searchButton: { locateStrategy: 'xpath', selector: "//button[@class='input-group-text']//i[@class='icon-zoom']"},
        makeButton: { locateStrategy: 'xpath', selector: "await loginPage.setValue('@email', usersTest.invalidUser)"},
        //VALIDATE SEARCH RESULTS
        playstationConsoleText: { locateStrategy: 'xpath', selector: "//li[1]//a[1]//div[1]//figure[1]//figcaption[1]//article[1]//h5[1]"},
        psp5Tittle: { locateStrategy: 'xpath', selector: "//h1[normalize-space()='Consola PlayStation 5 825 GB']"},
        psp5Price: { locateStrategy: 'xpath', selector: "//p[@class='a-product__paragraphDiscountPrice m-0 d-inline ']"},
        juego01: {locateStrategy:'xpath', selector:"//h5[normalize-space()='Grand Theft Auto V Estándar para PS5 físico']"},
    }
} 