// Write a JavaScript function to clone an array
// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]

//ye wala mai khud se karunga ............. nhi to bank hi chod dunga..


array_Clone = function(arr){
    return arr.slice(0);
};
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
console.log(array_Clone([1,2,3,4,5,6,7,8,9,10]))