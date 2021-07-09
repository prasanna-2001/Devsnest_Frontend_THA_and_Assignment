// 5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.
// Volume of a cylinder : V = πr2h where r is the radius and h is the height of the cylinder. 
// Try To Attempt : Difficult Level Increased


// toFixed(n) == is aused to restrict the decimal value upto nth decimal place..




// var a,b;
// var C = new Cylinder(a,b);
var C = new Cylinder(7,4);
function Cylinder(C_height, C_diameter){
  this.C_height = C_height;
  this.C_diameter = C_diameter;
}
Cylinder.prototype.Volume = function(){
  var radius = this.C_diameter/2;
  var vol = Math.PI*radius*radius*this.C_height;
  return vol;
}
// Cylinder(7,4);
console.log('the volume is', C.Volume().toFixed(4));