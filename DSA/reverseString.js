

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

console.log(Findlarget([99,66,78,6]));

function Findlarget(arr){
    return Math.max(...arr)
}