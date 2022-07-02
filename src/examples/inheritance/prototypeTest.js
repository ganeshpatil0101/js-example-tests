export function PrototypeTest() {
    function Human(fname, lname){
        this.fname = fname;
        this.lname = lname;
        this.getFname = function(){return this.fname;}
    }
    Human.prototype.getLname = function(){return this.lname}
    function Employee(fname, lname, country) {
        Human.call(this, fname, lname);
        this.country = country;
        this.getCountery = function(){return this.country;}
    } //
    // Need to create Human instance here to assign 
    //  all prototype methods so we can override them
    Employee.prototype = new Human();
    // Employee.prototype = Object.create(Human);
    Employee.prototype.title = "Sr software Engineer";
    // Override getLname method of Human objec
    Employee.prototype.getLname = function() { 
        return `===>> ${this.fname} ${this.lname}`;
    }
    let e = new Employee("Ganesh", "Patil", "India");
    console.log(e.getFname()); // Ganesh
    console.log(e.getLname()); // Patil // with method override should be Ganesh Patil
    console.log(e.getCountery()); //India 
    console.log(e.title);
    console.log(`fname is ownProptery ${e.hasOwnProperty('fname')}`);
    console.log(`title is ownProptery ${e.hasOwnProperty('title')}`);
}