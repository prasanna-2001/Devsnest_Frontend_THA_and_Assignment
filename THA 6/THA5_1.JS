// Write a JavaScript function to check whether an `input` is an array or not
// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// True
// function is_array(a){
//     if(typeof(a) == Object){
//         console.log("True");
//     }
//     else{
//         console.log("false");
//     }
// }
// console.log(is_array('w3resourse'));
// console.log(is_array([1, 2, 4, 0]));

//Nahi bana yrrrr shiiiiiiigttttttt dekh kr hi karna pada

is_array = function(a){
    if (toString.call(a) === "[object Array]"){
        return true;
    }
    else{
        return false;
    }
}
console.log(is_array('w3resourse'));
console.log(is_array([1, 2, 4, 0]));
