// this module return individual circle properties.

const PI = Math.PI;

exports.area = function (r) {
    return PI * r * r;
};

exports.circumference = function (r) {
    return 2 * PI * r;
};

exports.diameter = function (r) {
    return 2 * r;
};

exports.shape = function () {
    return "circle";
};

exports.greet = function () {
    return "Hello I am a " + this.shape();
};