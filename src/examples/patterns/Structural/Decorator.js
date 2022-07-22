// Add extra information on give object 
class Shoppers{
    constructor(name, account=0) {
        this.name = name;
        this.account = account;
        this.items = [];
    }
    purchase(item) {
        if(item.price > this.account) {
            console.log(`Cannot afford ${item.name}`);
        } else {
            console.log(`Purchasing item ${item.name}`);
            this.account -= item.price;
            this.items.push(item);
        }
    }
    printStatue() { console.log(this); }
}
class InventoryItem{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    print() { console.log(`${this.name} costs ${this.price}`);}
}
class GoldenInventory{
    constructor(baseItem) {
        this.name = `Golden ${baseItem.name}`
        this.price = 1000+ baseItem.price;
    }
    print() { console.log(`${this.name} costs ${this.price}`);}
}
class DimondInventory{
    constructor(baseItem) {
        this.name = `Dimond ${baseItem.name}`
        this.price = 2000+ baseItem.price;
    }
    print() { console.log(`${this.name} costs ${this.price}`);}
}


var alex = new Shoppers('Alex', 10000);
var walkman = new InventoryItem("Walkam", 30);
var neclace = new InventoryItem("Neclace", 50);
var golderWalkman = new GoldenInventory(walkman);
var dimondNeclace = new DimondInventory(neclace);

alex.purchase(golderWalkman);
alex.purchase(dimondNeclace);
alex.printStatue();