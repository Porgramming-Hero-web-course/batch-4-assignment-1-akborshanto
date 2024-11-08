"use strict";
function calculateShapeArea(shape) {
    if (shape.shape === "circle") {
        // Type guard for Circle
        return parseFloat((Math.PI * shape.radius ** 2).toFixed(2));
    }
    else if (shape.shape === "rectangle") {
        // Type guard for Rectangle
        return shape.width * shape.height;
    }
    throw new Error("Unsupported shape");
}
// Sample Input 1
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
console.log(circleArea); // Output: 78.54
// Sample Input 2
const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
});
console.log(rectangleArea); 