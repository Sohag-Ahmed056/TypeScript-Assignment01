function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === false) {
      return input.toLowerCase();
    } else {
      return input.toUpperCase();
    }
  }
  
//   console.log(formatString("Hello"));         
//   console.log(formatString("Hello", true));  
//   console.log(formatString("Hello", false));  
  

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    const filteredItems = [];
  
    for (const item of items) {
      if (item.rating >= 4) {
        filteredItems.push(item);
      }
    }
  
    return filteredItems;
  }
  
  const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
  ];
  
//   console.log(filterByRating(books));
 
  
  
function concatenateArrays<T>(...arrays: T[][]): T[] {
    const result: T[] = [];
  
    for (const array of arrays) {
      result.push(...array);
    }
  
    return result;
  }
  
//   console.log(concatenateArrays(["a", "b"], ["c"]));         
//   console.log(concatenateArrays([1, 2], [3, 4], [5]));        
  


class Vehicle {
    private make: string;
    public year: number;
  
    constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
    }
  
    public getInfo(): string {
      return `Make: ${this.make}, Year: ${this.year}`;
    }
  }
  
  class Car extends Vehicle {
    private model: string;
  
    constructor(make: string, year: number, model: string) {
      super(make, year); // Call the constructor of Vehicle
      this.model = model;
    }
  
    public getModel(): string {
      return `Model: ${this.model}`;
    }
  }
  
const myCar = new Car("Toyota", 2020, "Corolla");
   
//   console.log(myCar.getInfo())
//   console.log(myCar.getModel())




function processValue(value: string | number): number {
    if (typeof value === "string") {
      return value.length;
    } else {
      return value * 2;
    }
  }
//   processValue("hello"); 
//   processValue(10);  
//   console.log(processValue(10)) 
  
  
//   console.log(processValue("hello"))
 




interface Product {
    name: string;
    price: number;
  }
  
  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
      return null;
    }
  
    let maxPriceProduct = products[0];
  
    for (const product of products) {
      if (product.price > maxPriceProduct.price) {
        maxPriceProduct = product;
      }
    }
  
    return maxPriceProduct;
  }
  
  const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
  ];
  
//   console.log(getMostExpensiveProduct(products));
  
  
  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string {
    if (day === Day.Saturday || day === Day.Sunday) {
      return "Weekend";
    } else {
      return "Weekday";
    }
  }

//   getDayType(Day.Monday);  
// getDayType(Day.Sunday);   


async function calculateSquareAfterDelay(number: number): Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (number < 0) {
          reject(new Error("Negative number not allowed"));
        } else {
          resolve(number * number);
        }
      }, 1000);
    });
  }
  