Type Guards in TypeScript are essential for narrowing down variable types, ensuring that operations are safe and predictable. When dealing with variables that can have multiple types (e.g., union types), Type Guards allow TypeScript to refine the type and avoid runtime errors.

{<!-- Types of Type Guards -->}
typeof Guard: Used for primitive types like string, number, and boolean.

if (typeof value === 'string') {
  console.log(value.length);
}
