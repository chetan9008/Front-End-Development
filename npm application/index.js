const _ = require('lodash');

let array = [99, 1, 32, 23, 4, 11 ,29];

_.each(array, function (number, index) {
    console.log(number);
})