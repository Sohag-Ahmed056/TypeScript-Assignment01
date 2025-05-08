1.What are some differences between interfaces and types in TypeScript?


Interface:  Interface is used to specify the restitution of an object. It defines the structure of a piece of data, which is one or more properties (with types) that an object should have. Interfaces guarantee that you have type safety in your code that is forcing a contract for object structures.

Example:

 <pre><code>```ts interface Person {
  name: string;
  age: number;
}

const user: Person = {
  name: "Sohag",
  age: 24,
}; ```</code></pre>


Why Use Interfaces?
To make sure objects conform to a particular structure.


>To make the code more readable and nice.


>For code-completion and IntelliSense in editors.


>To create classes and function parameter contracts.


Key Features of Interfaces:


1.Optional Properties:

interface Person {
  name: string;
  age?: number; // optional
}


2. Read-only Properties:

interface Product {
  readonly id: number;
  name: string;
}




3.Extending Interfaces:

interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}



Types: Type is a keyword for custom types. It works pretty much the same as interface, but more flexibility—primitives, unions, intersections, tuples, and even function signatures are supported with type.


type User = {
  name: string;
  age: number;
};

const person: User = {
  name: "Sohag",
  age: 24,
};




Why Use type?


>To create reusable type aliases.


>To deal with intersecting complex types, like unions.


>For non-object-type things, such as primitives, functions, or tuples.

Key Features of type:

1.Union:

type Status = "success" | "error" | "loading";

let currentStatus: Status = "loading";

2. Intersection:
type A = { a: number };
type B = { b: string };

type Combined = A & B;

const obj: Combined = { a: 1, b: "text" };

3.Tuple:

type RGB = [number, string, number];

const color: RGB = [255, “sohag”, 0];




2.Union and Intersection types in TypeScript

TypeScript is loaded with type features that allow us to write safer, more maintainable code. For union types and intersection types, in particular, they are notable for their ability to emulate lots of common data structure types with some degree of data flexibility.



What Are Union Types (|)?

Union types enable a variable to be one of many types. It's also incredibly useful whenever you have a need to work with different types of input or deal with whatever the API returns.


Example:
let value: string | number;

value = "Hello";  
value = 42;       
value = true;     //  Error: boolean not allowed


What Are Intersection Types (&)?

Intersection types are used if you want to unite more than one type into one. The created type will have all the properties of the combined types. This is useful when a value has to meet more contracts.


example:
type User = {
  name: string;
  email: string;
};

type Admin = {
  role: "admin";
  permissions: string[];
};

type AdminUser = User & Admin;

const admin: AdminUser = {
  name: "Sohag",
  email: "sohag@gmail.com",
  role: "admin",
  permissions: ["create", "update", "delete"],
};


