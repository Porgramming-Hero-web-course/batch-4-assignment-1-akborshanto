"use strict";
function updateProfile(profile, updates) {
    return Object.assign(Object.assign({}, profile), updates);
}
// Sample Input
const myProfile = { name: "Alice", age: 25, email: "akobr@example.com" };
console.log(updateProfile(myProfile, { age: 26 }));
