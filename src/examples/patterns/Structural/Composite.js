class CatalogItem {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    get total() {
        return this.price;
    }
    print() {
        console.log(`${this.name} - $${this.price}`);
    }
}

class CatalogGroup {
    constructor(name, composite = []) {
        this.name = name;
        this.composite = composite;
    }
    get total() {
        return this.composite.reduce((total, nextItem)=> total + nextItem.total, 0);
    }
    print() {
        console.log(`======= ${this.name.toUpperCase()}==========`);
        this.composite.forEach((item)=> item.print());
    }
}

var boots = new CatalogItem("Leather Boots", 50.00);
var sneakers = new CatalogItem("Nike", 100.00);
var bata = new CatalogItem("Bata", 20);

var groupShoes = new CatalogGroup("All Shoes", [boots, sneakers, bata]);
groupShoes.print();
console.log('Total of all shoues ', groupShoes.total);

var groupFood = new CatalogGroup("Foods", [
    new CatalogItem("Apple", 5),
    new CatalogItem("Banana", 4),
    new CatalogItem("Pair", 6),
]);

groupFood.print();
console.log('total of food ', groupFood.total);

var keyChains = new CatalogItem('Key chain', 2);
var allCatalog = new CatalogGroup("All Items ", [groupShoes, groupFood, keyChains]);

allCatalog.print();
console.log('All Items Total ', allCatalog.total);
