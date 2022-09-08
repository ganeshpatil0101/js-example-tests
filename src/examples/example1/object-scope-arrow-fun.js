var name= 'Global Test';
function Test() {
    this.name = "Test Name"
    const ob = {
        name:'Test',
        getName: function (){
            return this.name;
        },
        getName1: () => {
            return this.name;
        },
        getName2() {
            return this.name;
        }
    }
    return ob;
}
let fo = Test();
console.log(fo.getName())
console.log(fo.getName1())
console.log(fo.getName2())
// console.log(ob.getName());
// console.log(ob.getName1()); //  point to global name, window name , empty in case let name
// console.log(ob.getName2());