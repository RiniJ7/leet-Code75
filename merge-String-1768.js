/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    //initialize counter for each word
    let i=0;
    let j=0;
    //initialize the result to an empty array
    let result = [];

    let totalStringLength = ( word1.length + word2.length - 1 );
   while (totalStringLength > 0){
   if(i !== word1.length) {
   result.push(word1[i]);
   i++;
   }
    if(j !== word2.length) {
   result.push(word2[j]);
   j++;
   }
   totalStringLength--;
}
return(result.join(''));
}
