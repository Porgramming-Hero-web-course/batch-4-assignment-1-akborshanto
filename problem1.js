"use strict";
//PROBLEM 1
function sumArray(num) {
    return num.reduce((acc, current) => acc + current, 0);
}
const result = sumArray([1, 2, 3, 4, 5,]);
