// 3. Write a JavaScript program to get the length of a JavaScript object.  
// Sample object : var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 


var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
var size=0, key;
function lengthobj(obj){
    for(key in obj){
        size++;
    }
    return size;
}
var fin =  lengthobj(student);
console.log('The size is : ', fin );


// objsize = function(Myobj) {
//     var osize = 0, key;
//     for (key in Myobj) {
//         osize++;
//     }
//     return osize;
// };

// var student = { 
// name : "David Rayy", 
// sclass : "VI", 
// rollno : 12 };

// var objsize = objsize(student);
// console.log('Size of the current object : '+objsize);