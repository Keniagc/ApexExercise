module.exports = {
  
    elements: {
        //"CATEGORIAS" MENU
        categoryMenu: { locateStrategy: 'xpath', selector: '//header/div[4]/div[3]/div[1]/nav[1]/div[1]/div[1]/div[1]/div[1]/div[1]/ul[1]/li[1]/span[1]'},
        bellezaOption: { locateStrategy: 'xpath', selector: '//div[@class="col-lg-10"]//span[contains(text(),"Belleza")]'},
        menPerfumOption: { locateStrategy: 'xpath', selector: '//a[normalize-space()="Perfumes Hombre"]'},

        //SELECCT FILTER
        //searchBrands: {locateStrategy:'xpath', selector: "//input[@id='search-filter-brands']"}
        diorBrandField: { locateStrategy: 'xpath', selector: "//input[@id='brand-DIOR']"}
    }
} 