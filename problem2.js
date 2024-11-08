"use strict";
function removeDuplicates(arr) {
    const uniqueArray = [];
    arr.forEach((num) => {
        if (!uniqueArray.includes(num)) {
            uniqueArray.push(num);
        }
    });
    return uniqueArray;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
