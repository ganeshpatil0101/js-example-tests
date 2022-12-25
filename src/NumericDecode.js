
function decodeNumericode(cipher) {
    const alphaMap = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 
                      'h', 'i', 'j', 'k', 'l', 'm', 'n', 
                      'o', 'p', 'q', 'r', 's', 't', 'u', 
                      'v', 'w', 'x', 'y', 'z'];
    
    const input = cipher.split(' ');
    const getOriginalNum = (n) => {
        if(n <= 26) return n;
        return getOriginalNum(n / 27);
    }
    let decodedString = '';
    input.forEach((i) => {
        let num = Number(i);
        if(num > 26 ){
            num = getOriginalNum(num);
        }
        if(Number.isInteger(num)) {
            decodedString += alphaMap[num-1];
        } else {
            decodedString += ' ';
        }
    });
    return decodedString;
}


console.log(decodeNumericode('6 15 15 28 2 1 18'));
console.log(decodeNumericode('8 5 12 12 15'));
console.log(decodeNumericode('13 27 26 5'));
console.log(decodeNumericode('432 21 19 5832 5 135 14 6561 59049 15 486 275562'));
console.log(decodeNumericode('20 486 21 513 19 324 5 21924 540 135 3 8'));
console.log(decodeNumericode('8 5 324 8748 295245 730 23 405 13122 12 108'));
