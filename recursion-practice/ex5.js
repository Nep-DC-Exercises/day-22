// Searching a JSON object recursively
// This sort of works?
let search = 44342

function contains(obj, testVal) {
    
    for (let prop in obj) {

        if (typeof obj[prop] !== 'object') {
            // console.log("testVal", testVal)
            // console.log(obj[prop])
            if (obj[prop] === testVal) {
                console.log("That value is in the nested object:", obj[prop])
                return true
            } else {
                console.log("That value is not in the nested object:", obj[prop])
                return false
            }

        } else {
            contains(obj[prop], testVal)
        }
    }
}

let nestedObject = { 
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            },
            morestuff: {
                thing: {
                    moreStuff2: {
                        magicNumber: 445,
                        something: 'foobar'
                    }
                }
            },
            evenmore: {
                thing: {
                    moreStuff2: {
                        magicNumber: [9,6,7,5000],
                        something: 'foobar'
                    }
                }
            },
        }
    }
}

let ans = contains(nestedObject, search)
console.log(ans)