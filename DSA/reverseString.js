

function reverseString(str){
    return str.split("").reverse().join("");
}

// console.log(reverseString("hello world")); // Output: "dlrow olleh" 


function ispalindrome(str){
    const reversed = str.split("").reverse().join("");
    return str === reversed;
}

// console.log(ispalindrome("mam"));

// function findLargest(arr){
//     let largets=arr[0];
//     for (let i=1; i<arr.length; i++){
//         if (arr[i]>largets){
//             largets=arr[i];
//         }
//     }

//     return largets;
// }

// console.log(Findlarget([99,66,78,6]));

function Findlarget(arr){
    return Math.max(...arr)
}

// let arr = [5,4,8,5];
// arr = arr.slice(1);
// console.log(arr);

function greet (name,callback){
    callback (`Hello, ${name}!`);
}

// greet("pratik", (message) => {
//     console.log(message);
// });

// const add = (a , b) => a + b;

// console.log(add(5,5));


// const obj= {
//     "name":"pratik"
// }

// obj.age=22;
// console.log(obj);
// delete obj.age;
// console.log(obj);
// console.log([1, 2, 3,5].reduce((a, b) => a + b));//adds numbers in the array, together using the reduce mehtod

// console.log("fgh".repeat(3));

function fibonachi(n){
    let num1=0 , num2 = 1, nextnum;

    console.log("Fibonacci Sequence");

    for ( let i =1; i <=n; i++){
        console.log(num1);
        nextnum=num1+num2;
        num1=num2;
        num2=nextnum;
    }
}

// fibonachi(7);

function factorial (n){
    let Ans=1;
    for(let i =1; i<=n; i++){
        Ans*=i;
    }
    return Ans;
}

// console.log(factorial(6));