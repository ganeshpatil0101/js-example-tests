var inventory = require('./Inventory');
class Storage {
    constructor(name, inventory = [], days = 0) {
        this.name = name;
        this.inventory = inventory;
        this.days= days;
        this.next = null;
    }
    find(itemName) { 
        const found = this.lookInLocalInventory(itemName);
        if(found) {
            return {
                name: found.name, 
                qty: found.qty,
                location: this.name, 
                deliveryTime: (this.days === 0) ? 'now' : `${this.days} Days`
            }
        } else if(this.next) {
           return this.next.find(itemName);
        } else {
            return `${itemName} not found in out store`;
        }
    }
    lookInLocalInventory(itemName) { 
        var index = this.inventory.map(item => item.name).indexOf(itemName);
        return this.inventory[index];
    }
    setNext(nextStorage) {
        this.next = nextStorage;
    }
}
class Store {
    constructor(name, inventory=[]){
        this.name= name;
        var floor = new Storage('store floor', inventory.floor);
        var backroom = new Storage('store backroom', inventory.backroom);
        var localStore = new Storage('store floor', inventory.localStore, 1);
        var wareHouse = new Storage('store warehouse', inventory.warehouse, 5);

        floor.setNext(backroom);
        backroom.setNext(localStore);
        localStore.setNext(wareHouse);
        this.storage = floor;
    }

    find(itemName) { 
        return this.storage.find(itemName);
    }
}



var skiShop = new Store('Steep & deep', inventory);
console.log(skiShop.find('ski boots'));
console.log(skiShop.find('ski hats'));
console.log(skiShop.find('wax'));

