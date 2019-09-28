let x = 3

function sumRange(x) {
    if (x === 0) return 0;
    return x + sumRange(x-1)  // 3 + 2 + 1 + 0 (without the conditional, it goes to neg infinity) + -1 + -2 -3 - 4 -5
}

console.log(sumRange(x))

// 3 should be 6
// 4 should be 10