export function PrototypeTest() {
    function Human(fname, lname){
        this.fname = fname;
        this.lname = lname;
        this.getFname = function(){return this.fname;}
        this.getLname = function(){return this.lname;}
    }
    function Employee(fname, lname, country) {
        Human.call(this, fname, lname);
        this.country = country;
        this.getCountery = function(){return this.country;}
    }
    Employee.prototype.title = "Sr software Engineer";

    Employee.prototype = Object.create(Human);
    let e = new Employee("Ganesh", "Patil", "India");
    console.log(e.getFname()); // Ganesh
    console.log(e.getLname()); // Patil
    console.log(e.getCountery()); //India 
    console.log(`fname is ownProptery ${e.hasOwnProperty('fname')}`);
    console.log(`title is ownProptery ${e.hasOwnProperty('title')}`);
}