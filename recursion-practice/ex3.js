// Write a function that returns the factorial of a number. 
// As a quick refresher, a factorial of a number is the result of that number multiplied by the number before it, and the number before that number, and so on, until you reach 1. The factorial of 1 is just 1.


let x = 5

function factorial(x) {
    if (x === 1) return 1;
    return x * factorial(x-1)
}

console.log(factorial(x))