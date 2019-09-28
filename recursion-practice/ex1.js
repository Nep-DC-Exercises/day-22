let num = 5

function countDown(num) {
    if (num === 0) return;
    console.log(num)
    countDown(num-1)
}

countDown(num)

