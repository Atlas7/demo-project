var circle = require('./circle.js');
var myCircle = circle(4);

// visualize via cloud9 IDE
var _test1 = myCircle.area();  // number
var _test2 = myCircle.circumference();  // number 
var _test3 = myCircle.diameter();  // number
var _test4 = myCircle.shape();  // string
var _test5 = myCircle.greet();  // string

console.log(myCircle.area());
console.log(myCircle.circumference());
console.log(myCircle.diameter());
console.log(myCircle.shape());
console.log(myCircle.greet());