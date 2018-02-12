/*var rect = {
  perimeter: (x,y) => (2*(x+y)),
  area: (x,y) => (x*y)
};*/
var rect = require('./rectangle');

function solveRect(l,b){
  console.log("Solving for rect with l = " + l + " and b = " + b);
  
  if (l <= 0 || b <= 0){
    console.log("invalid dimensions");
  }
  
  else{
    console.log("the area is " + rect.area(l,b));
    console.log("the perimeter is " + rect.perimeter(l,b));
  }
}

solveRect(2,2);
solveRect(3,0);
solveRect(1,1);