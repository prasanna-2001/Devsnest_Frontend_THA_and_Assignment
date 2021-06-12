// Write a JavaScript program to find the most frequent item of an array
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )


// var arr1=[00,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,8,9,9,6,3,5];
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let noof1=0;
let max=0;
var item;
for(var i=0; i<arr1.length; i++){
    for(var j=0; j<arr1.length; j++){
        if(arr1[i]==arr1[j]){
            noof1++;
        }
        if(max<noof1){
            max=noof1;
            item=arr1[i];
        }
    }
    noof1=0;
}
console.log(item + " (" + max + "times)" );