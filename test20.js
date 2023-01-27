// callback function
function callback() {
    console.log('callback called');
    }
// call function
callback();

// nested function
function outer() {
    console.log('outer called');
    function inner() {
        console.log('inner called');
    }
    inner();
}
outer();

// function expression
var func = function() {
    console.log('function expression called');
}
func();

// function expression with parameter
var func2 = function(name) {
    console.log('function expression called with parameter ' + name);
}
func2('John');

// function expression with parameter and return value
var func3 = function(name) {
    return 'function expression called with parameter ' + name;
}
console.log(func3('John'));



