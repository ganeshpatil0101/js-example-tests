
let memoFunction = {};
function useMemo(fun, dependencies=[]) {
    // check previous value and new value is same then return same instance of function
    const funStr = fun.toString();
    if (!memoFunction[funStr]) {
        memoFunction[funStr] = [fun, dependencies];
    }
    // compare previous new 
    const prevDeps = memoFunction[funStr][1];
    if(prevDeps && prevDeps.length > 0) {
      let depsChanged = false;
      for(let i=0;i<prevDeps.length; i++) {
        if(prevDeps[i] !== dependencies[i]) {
          depsChanged = true;
          break;
        }
      }
      if(depsChanged) {
        console.log('deps changed modified instance');
        memoFunction[funStr] = [fun, dependencies];
      }
    }
    return memoFunction[funStr][0];
}

const f1 = useMemo(() => {
    console.log('my memoized function');
}, ['test', 'test2', 'test3']);

const f2 = useMemo(() => {
    console.log('my memoized function');
}, ['test', 'test2', 'test3']);
console.log(memoFunction);
console.log(f1 === f2);
