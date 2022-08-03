function watcher(sourceObj, getCB, setCB) {
    let ob = {};
    const keys = Object.keys(sourceObj);
    console.log(keys);
    for(let i = 0; i < keys.length; i++) {
        let key = keys[i];
        let val = sourceObj[keys[i]];
        function GetterSetter(key, val) {
            let keyName = key;
            let value = val;
            return {
                get: function() {
                    getCB(keyName, value);
                    return value;
                },
                set: function(val) {
                    setCB(keyName, value, val);
                    value = val;    
                }
            }
        }
        Object.defineProperty(ob, key, GetterSetter(key, val));
    }
    return ob;
};
const obTest = {fName: 'Ganesh', lName: 'Patil'};

function getterCallback(keyName, value) {
    console.log(`getterCallback called [${keyName}] = ${value}`);
}
function setterCallback(keyName, prevValue, currentVal) {
    console.log(`setterCallback called [${keyName}] ${prevValue} ${currentVal}`);
}

let watchObj = watcher(obTest, getterCallback, setterCallback);
watchObj.fName;
watchObj.fName = "Ganesha";
watchObj.fName;
watchObj.lName;
// console.log(watchObj);