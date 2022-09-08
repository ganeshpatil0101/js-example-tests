/*
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

function caesarCipher(s, k) {
    const orgAlphabets = 'abcdefghijklmnopqrstuvwxyz';
    const arrAlpha = orgAlphabets.split('');
    let rotatedArr = orgAlphabets.split('');
    // alphabet rotated
    for(let i=0;i<k;i++) {
        const firstEl = rotatedArr.shift();
        rotatedArr.push(firstEl);
    }
    const convertToObj = (orgAlphaArr, rotatedArr) => {
        let obj = {};
        for(let p = 0; p<orgAlphaArr.length; p++) {
            obj[orgAlphaArr[p]] = rotatedArr[p];
        }
        return obj;
    }
    // storing character map in object for easy to accessible
    const caesarCipherObj = convertToObj(arrAlpha, rotatedArr);
    const arrStr = s.split('');
    let output = '';
    for(let s=0;s<arrStr.length; s++) {
        const char = arrStr[s].toLowerCase();
        const cipherChar = caesarCipherObj[char];
        if(!cipherChar) {
            // must be some special char append it to optput
            output+= arrStr[s];
        } else {
            // check for uppercase
            if(arrStr[s] === arrStr[s].toUpperCase()) {
                output+= cipherChar.toUpperCase();
            } else {
                output+= cipherChar;    
            }
        }
    }
    return output;
}