export function ObserverPattern() {
    // Observer Pattern also called publisher subscriber pattern
    function Sub() {
        let events = [];
        this.subscriber = (func) => {
            events.push(func);
        }
        this.unsubscriber = (func) => {
            events = events.filter((f) => {
                if(f !== func) {
                    return f
                }
            });
        }
        this.notify = (func, obj, params = []) => {
            let scope = obj || window;
            events.every((f) => {
                if(f === func) {
                    f.apply(scope, params); 
                    return false;
                }
                return true;
            });
        }
        this.notifyAll = (obj, params = []) => {
            let scope = obj || window;
            events.every((f) => {
                f.apply(scope, params);
                return true;
            });
        }
    };

    let s = new Sub();
    const fun1 = () => { console.log(' Called Function 1');}
    s.subscriber(fun1);
    const fun2 = () => { console.log(' Called Function 2');}
    s.subscriber(fun2);
    const fun3 = (params) => { console.log(` Called Function 3 ${params}`);}
    s.subscriber(fun3);

    console.log('Should notify only fun1 & fun3');
    s.notify(fun1);
    s.notify(fun3, window, ['fun3params']);

    s.unsubscriber(fun3);
    console.log('Should notifyAll function but not function 3');
    s.notifyAll();
}