class Shoppers {
    constructor( name='unnamed person' ){
        this._name = name;
        this._shoppingList = [];
    }
    set name(value) {
        this._name = value;
    }
    get name() {
        return this._name;
    }
    get shoppingList() {
        return this._shoppingList.join(', ');
    }
    addItemsToList(item) {
        this._shoppingList.push(item);
    }
    clone() {
        let proto = Object.getPrototypeOf(this);
        let cloned = Object.create(proto);
        cloned._name = this._name;
        cloned._shoppingList = [...this._shoppingList];
        return cloned;
    }
}

let scout = new Shoppers();
scout.push('camping knife');
scout.push('tent');
scout.push('backpack');
scout.push('map');

let alex = scout.clone();
alex.name = "Alex";
alex.push('silingshot');

let eve = scout.clone();
eve.name = "Eve ";
eve.addItemsToList('Reading Light');

console.log(alex.name, alex.shoppingList);
console.log(eve.name, eve.shoppingList);
