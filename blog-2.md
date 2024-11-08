Intersection types, denoted by the & (ampersand) operator, combine multiple types into one. This allows a variable to hold all the properties of multiple types, enabling more complex structures and ensuring that objects meet multiple type requirements.

Example:

typescript
Copy code
interface A {
  name: string;
}

interface B {
  age: number;
}

type Person = A & B;

const person: Person = { name: "Alice", age: 30 }; // Valid