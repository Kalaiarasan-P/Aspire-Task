// Topic:functions
//date:
//Reviwed By;


function printHello(): void {
  console.log('Hello!');
}

printHello();

function multiply(a: number, b: number) {
    return a * b;
  }

console.log(multiply(2,3))

function add(a: number, b: number, c?: number) {
    return a + b + (c || 0);
  }

  console.log(add(2,3))

  // Anonymous function  
let myAdd = function (x: number, y: number) : number {  
    return x + y;  
};  
 
console.log(myAdd(5,3));  

// Rest Parameters

function sum(a: number, ...b: number[]): number {  
    let result = a;  
    for (var i = 0; i < b.length; i++) {  
    result += b[i];  
    }  
    return result;  
  }  
  let result1 = sum(3, 5);  
  let result2 = sum(3, 5, 7, 9);  
  console.log(result1 +"\n" + result2);

  // Arrow function

  let sum1 = (a: number, b: number): number => {  
    return a + b;  
}  
console.log(sum1(20, 30));
