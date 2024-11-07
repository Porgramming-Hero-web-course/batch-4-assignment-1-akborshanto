//PROBLEM 1
function sumArray(num) {
    return num.reduce(function (acc, current) { return acc + current; }, 0);
}
var result = sumArray([1, 2, 3, 4, 5,]);
