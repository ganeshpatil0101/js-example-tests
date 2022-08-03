// Code 1:
// function func1(){
    
//     setTimeout(()=>{
//         console.log(x);
//         console.log(y);
//     },100);
//     var x = 2;
//     let y = 12;
// }

// func1(); // x = 2, y = 12

// // Code 2:
// // Internal Use - Confidential
// function func2(){
//     for(var i = 0; i < 3; i++){
//         setTimeout(()=> console.log(i),10);
//     }
// }
// func2(); // 3 3 3
// // Code 3:

// (function(){
//     setTimeout(()=> console.log(1),20);
//     console.log(2);
//     setTimeout(()=> console.log(3),0);
//     console.log(4);
// })();

// // 2
// // 4 
// // 3
// // 1


// var x = 23;
// (function(){
//     var x = 43;
//     (function random(){
//         x++;
//         console.log(x); 
//         var x = 21;
//     })();
// })(); 
// //Answer:


// document.querySelector("input[type='email']")

// let str = "Ns123";
// if(Number(str)=== NaN) {

// }

// fetch('url').then(function(res){
//     return res.json();
// }).then((parseDJsonData)=>{
//     console.log(parseDJsonData);
// })




    console.log(isNaN("Hello")) // true
    console.log(isNaN(345) )// false
    console.log(isNaN('1')) // true
    console.log(isNaN(true) )// false
    console.log(isNaN(false) )// false
    console.log(isNaN(undefined)) // true




//     var myObject = {
//         foo: "bar",
//         func: function() {
//             var self = this;
//             console.log("outer func: this.foo = " + this.foo); // bar
//             console.log("outer func: self.foo = " + self.foo); // bar
//             (function() {
//                 console.log("inner func: this.foo = " + this.foo); // undefined
//                 console.log("inner func: self.foo = " + self.foo); // bar
//             }());
//     }
// };

//         myObject.func();



