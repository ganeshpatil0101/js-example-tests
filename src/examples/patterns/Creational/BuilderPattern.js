// Problem where to use Builder patter

// var sue = new Person("Sue", true, true, 60);
// var bill = new Person("Bill", true, false, 20);
// var phill = new Person("Phill", true, false);

// // Shoppers
// var charles = new Person("Charles", false, false, 0, 500, ['jeans', 'sunglasses']);

// Here Problem is class parameters are not readable and don't know which param is pointing wich one
// to get know we have to open that class and check what are the parameters

class Person {
    constructor(builder) {
        this.name = builder.name;
        this.isEmployees = builder.isEmployees;
        this.isManager = builder.isManager;
        this.hours = builder.hours;
        this.money = builder.money;
        this.shoppingList = builder.shoppingList;
    }
    toString() {
        return JSON.stringify(this);
    }
}
class PersonBuilder { 
    constructor(name) {
        this.name = name;
    }
    makeEmployees() {
        this.isEmployees = true;
        return this;
    }
    makeManager(hours = 40) {
        this.isManager = true;
        this.hours = hours;
        return this;
    }
    makePartTime(hours = 20) {
        this.hours = hours
        return this;
    }
    withMoney(money) {
        this.money = money;
        return this;
    }
    withList(list=[]) {
        this.shoppingList = list;
        return this;
    }
    build() {
        return new Person(this);
    }
}
var sue = new PersonBuilder('Sue').makeEmployees().makeManager(60).build();
var bill = new PersonBuilder('Bill').makeEmployees().makePartTime().build();
var phill = new PersonBuilder('Phill').makeEmployees().build();

// Shoppers
var charles = new PersonBuilder('Charles').withMoney(500).withList(['Jean', 'sunglasses']).build();
var tabbitha = new PersonBuilder('Tabbitha').withMoney(1000).build();

console.log(sue.toString());
console.log(bill.toString());
console.log(charles.toString());


