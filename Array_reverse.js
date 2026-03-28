
// console.log(arr);
// var arr1=[];
// for(let i=arr.length-1; i>=0; i--){
    //     arr1.push(arr[i]);
// }

// console.log(arr1);

// arr.reverse();
// console.log(arr);

let arr=[1,2,3,4,5,6,7,8,9]

//  function reverseArray(arr){
//     let left = 0;
//     let right = arr.length-1;
//     while(left<right){
//         [arr[left],arr[right]]=[arr[right],arr[left]];
//         left++;
//         right--;
//     }
//     return arr;
//  }

//  console.log(reverseArray(arr));


let reverse=arr.reduce((acc,curr)=>{
    return [curr,...acc];
},[]);

console.log(reverse);