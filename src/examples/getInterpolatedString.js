//# Write the function definition - getInterpolatedString()
var str = "Hey {{name}} from {{city}}";
var obj = {
  name: "John",
  city: "Bangalore"
};
function getInterpolatedString(str, obj) { 
    const keys = Object.keys(obj);
    for(let i = 0; i < keys.length; i++) {
        const formatedKey = `{{${keys[i]}}}`
        str = str.replaceAll(formatedKey, obj[keys[i]]);
    }
    return str;
}
console.log(getInterpolatedString(str, obj));
//Output : "Hey John from Bangalore"
