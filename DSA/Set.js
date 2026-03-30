// let myset = new Set();

// // Adding new elements to the set
// myset.add("California");
// myset.add("Seattle");
// myset.add("Chicago");

// // Creating an iterator object
// const setIterator = myset.entries();

// // Getting values with iterator
// console.log(setIterator.next().value);
// console.log(setIterator.next().value);
// console.log(setIterator.next().value);

function logestSubString(s){
    let set = new Set();
    let left=0;
    let maxlength=0;

    for (let right=0; right<s.length; right++){

        while(set.has(s[right])){
            set.delete(s[left]);
            left++
        }

        set.add(s[right]);
        maxlength=Math.max(maxlength, right-left+1);
    }
    return maxlength
}

console.log(logestSubString("abcabcbb"));