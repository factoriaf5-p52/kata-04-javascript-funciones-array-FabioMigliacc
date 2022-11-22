/* Encuentra el máximo */
export function maxOfTwoNumbers(a, b) {
    if (a > b) {
        return a
    } else if (a < b) {
        return b
    } else {
        return a
    }
}
export function findLongestWord(array) {
    if (array.length == 0) {
        return undefined;
    }
    let longestWord = "";
    for (let i = 0; i < array.length; i++) {
        if (longestWord.length < array[i].length) {
            longestWord = array[i];
        }
    }
    return longestWord;

}
export function sumArray(array) {
    /*let sum = 0;
    for (let i = 0; i > array.leght; i++)
     sum += array[i];
        for (
          var
            index = 0,              // The iterator
            length = array.length,  // Cache the array length
            sum = 0;                // The total amount
            index < length;         // The "for"-loop condition
            sum += array[index++]   // Add number on each iteration
       
        return sum;*/

    return array.reduce((a, b) => a + b, 0);
}


export function averageNumbers(array) {
    if (array.length === 0) 
    {return undefined;}
    return array.reduce((a, b) => a + b, 0) / array.length;

}

export function averageWordLength(array) { 
    if (array.length === 0) 
    {return undefined;}
    let unifyArray = array.join('').length / array.length;
    return unifyArray;

}
export function uniquifyArray(array) {
    if (array.length === 0) 
    {return undefined;}

 let arrayUnify = [...new Set(array)];

return arrayUnify;

 }
export function doesWordExist(array, word) { 
 
return array.includes(word);

}
export function howManyTimes(array, value) {
    if (array.length === 0) 
    {return undefined;}
    
    return array.filter((v) => (v === value)).length;
}
export function greatestProduct() { }





