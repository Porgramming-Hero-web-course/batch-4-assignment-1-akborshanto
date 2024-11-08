 Union Types
Union types in TypeScript allow us to define a variable or parameter that can hold values of multiple types. To create a union type, use the | operator between the types within parentheses.

// Union type example
type Status = "active" | "inactive" | "pending";

function setStatus(status: Status) {
  // Function logic
}
In the above example, the Status type is a union of three string literals - "active," "inactive," and "pending." The setStatus function can now accept any of these three values as its argument.

Handling Union Types
When working with variables or parameters of union types, TypeScript offers type guards and conditional checks to narrow down the possible types and perform specific actions…

