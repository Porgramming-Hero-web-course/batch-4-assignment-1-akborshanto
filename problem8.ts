function validateKeys<T extends object>(obj: T, keys: (keyof T)[]): boolean {
    return keys.every(key => key in obj);
  }
  
  // Sample Input
  const person = { name: "Alice", age: 25, email: "shantoe@example.com" };
  console.log(validateKeys(person, ["name", "age"])); // Output: true
  