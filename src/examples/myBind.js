function Test(param, param2, param3) {
    console.log('==>', this.myName);
    console.log('==>', param);
    console.log('==>', param2, param3);
  }
  let ob = { myName: 'Ganesh' };
  
  console.log('====== original bind =========')  
  let bindTest = Test.bind(ob, 'Patil');
  bindTest('Kolhapur', 'Panhala');
  

  // Bind implementation withcout call/apply
  Function.prototype.myBindWithoutCallApply = function(context, ...args) {
    context.funcToCall = this;
    return function (...rest) {
        allArgs = [...args, ...rest];
        context.funcToCall(...allArgs);
    }
  }
console.log('====== myBindWithoutCallApply =========')
let testBind = Test.myBindWithoutCallApply(ob, 'Patil');
testBind('Kolhapur', 'Panhala');


  Function.prototype.myBindWithCall = function (context, param) {
    const fun = this;
    return (...rest) => {
      fun.call(context, param, ...rest);
    }
  }
  console.log('====== myBindWithCall =========')
  const bindFunction = Test.myBindWithCall(ob, 'Patil');
  bindFunction('Kolhapur', 'Panhala');

  