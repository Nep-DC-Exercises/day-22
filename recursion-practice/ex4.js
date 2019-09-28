let a = []
let n = 0

function productOfArray(arr, n) {

    if (n == arr.length) {
        return 1;
    }
    else {
        return arr[n] * productOfArray(arr, n+1);
    }
}

console.log(productOfArray(a, n))