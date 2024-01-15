 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let lenStr1 = str1.length;
    let lenStr2 = str2.length;

//condition to check if there is atleast one gcd(greatest common denominator)
    if (str1 + str2 != str2 + str1){
        return("");
    }

    let greatestCommonDivisor = function(x,y) {
        if(!y)
        return x
        return greatestCommonDivisor(y, x % y)
    }

    let div = greatestCommonDivisor(lenStr1,lenStr2)
    return str1.slice(0,div)
};
