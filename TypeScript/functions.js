function printHello() {
    console.log('Hello!');
}
printHello();
function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 3));
function add(a, b, c) {
    return a + b + (c || 0);
}
console.log(add(2, 3));
// Anonymous function  
var myAdd = function (x, y) {
    return x + y;
};
console.log(myAdd(5, 3));
// Rest Parameters
function sum(a) {
    var b = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        b[_i - 1] = arguments[_i];
    }
    var result = a;
    for (var i = 0; i < b.length; i++) {
        result += b[i];
    }
    return result;
}
var result1 = sum(3, 5);
var result2 = sum(3, 5, 7, 9);
console.log(result1 + "\n" + result2);
// Arrow function
var sum1 = function (a, b) {
    return a + b;
};
console.log(sum1(20, 30));
