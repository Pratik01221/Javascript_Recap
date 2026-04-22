

function reverseString(str){
    return str.split("").reverse().join("");
}

// console.log(reverseString("hello world")); // Output: "dlrow olleh" 


function ispalindrome(str){
    const reversed = str.split("").reverse().join("");
    return str === reversed;
}

// console.log(ispalindrome("mam"));

