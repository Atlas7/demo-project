var circle = require('./circle.js');
var radius = 4;

var _test1 = circle.area(radius);
var _test2 = circle.circumference(radius);
var _test3 = circle.diameter(radius);
var _test4 = circle.shape();
var _test5 = circle.greet();

console.log( 'The area of a circle of radius ' + radius + ' is: ' + circle.area(radius));
console.log( 'The circumference of a circle of radius ' + radius + ' is: ' + circle.circumference(radius));
console.log( 'The diameter of a circle of radius ' + radius + ' is: ' + circle.diameter(radius));
console.log( 'The shape of a circle is: ' + circle.shape());
console.log( 'Greeting from circle: ' + circle.greet());