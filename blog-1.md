Union Types:
Union types allow a variable to hold values of different types. By using the | (pipe) operator, you can define a type that can be one of several options. This is helpful when a variable can take multiple forms, offering flexibility while still maintaining type safety.

Example:

typescript
Copy code
let value: string | number;
value = "Hello"; // Valid
value = 42; // Valid