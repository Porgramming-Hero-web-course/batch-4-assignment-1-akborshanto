Using typeof Type Guards
The typeof operator in TypeScript can be used to check the type of a variable using the typeof operator. When used in a conditional statement, it acts as a Type Guard by narrowing down the type of the variable.

Example: To demonstrate the typeof name === 'string' check acts as a Type Guard, allowing TypeScript to infer that name is of type string within the conditional block.



function greet(name: string | number) {
    if (typeof name === 'string') {
        console.log(`Hello, ${name.toUpperCase()}!`);
    } else {
        console.log(`Hello, ${name}!`);
    }
}

greet('John');
greet(42);
Output:

"Hello, JOHN!" 
"Hello, 42!" 
Using instanceof Type Guards
The instanceof operator checks if an object is an instance of a particular class or constructor function. It can be used as a Type Guard to narrow down the type of an object.

Example: To demonstrate infering the correct type with in each conditional block and finding the instanceof Dog and instanceof Cat act as Type Guards.



class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class Dog extends Animal {
    breed: string;
    constructor(name: string, breed: string) {
        super(name);
        this.breed = breed;
    }
}

class Cat extends Animal {
    color: string;
    constructor(name: string, color: string) {
        super(name);
        this.color = color;
    }
}

function displayInfo(animal: Dog | Cat) {
    if (animal instanceof Dog) {
        console.log(
            `This is a dog named ${animal.name},
                    breed: ${animal.breed}`
        );
    } else {
        console.log(
            `This is a cat named ${animal.name},
                    color: ${animal.color}`
        );
    }
}

const dog = new Dog('Buddy', 'Labrador');
const cat = new Cat('Whiskers', 'Gray');

displayInfo(dog);
displayInfo(cat);
Output:

"This is a dog named Buddy,  breed: Labrador"
"This is a cat named Whiskers, color: Gray"