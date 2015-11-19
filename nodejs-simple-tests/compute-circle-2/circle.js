// This module returns a circle object

const PI = Math.PI;

module.exports = function (r) {
    return {
        area: function() {
            return PI * r * r;
        },
        circumference: function() {
            return 2 * PI * r;            
        },
        diameter: function() {
            return 2 * r;            
        },
        shape: function() {
            return "circle";
        },
        greet: function() {
            return "Hello I am a " + this.shape();
        }
    }
};

/*
module.exports = function (r) {
    return {
        area: function() {
            PI * r * r;
        }
    }
};

module.exports = function (r) {
    return {
        circumference: function() {
            2 * PI * r;            
        }
    }
};

exports.exports = function (r) {
    return {
        diameter: function() {
            2 * r;            
        }
    }
};
*/