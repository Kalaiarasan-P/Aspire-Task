// Arrow Function

let array=[1,2,3,4,5];
let sum=0;
let sumOfArray=array=>{
    for(let i of array){
        sum+=i;
    }
    return sum;
}

console.log(sumOfArray(array));

// callback function

function greet1(name){
    console.log("hello "+name);
}

function greet2(callback){
    callback("kalai");
}
greet2(greet1);