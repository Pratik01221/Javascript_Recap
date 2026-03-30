// const map = new Map();

// map.set("name", "Pratik");
// map.set("age",25);
// map.set("location","Pune")

// console.log(map);
// console.log(map.get("name"));
// console.log(map.get("age"));
// console.log(map.get("location"));

// console.log(map.has("name"));
// map.delete("name");
// map.clear();
// console.log(map);


// map.forEach((value,key)=>{
//     console.log(`${key}:${value}`);
// });

// map.forEach((value,keys)=>{
//     console.log(`${value}:${keys}`);
// });


// Two sum using the Hash map

A=[2,7,11,15];
T=9;

function twosum(nums,target){
    let map = new Map();

    for (let i=0; i<nums.length; i++){
        let complement=target-nums[i];

        if (map.has(complement)){
            return [map.get(complement),i]
        };
        map.set(nums[i],i);
    }
    return []
}

console.log(twosum(A,T))