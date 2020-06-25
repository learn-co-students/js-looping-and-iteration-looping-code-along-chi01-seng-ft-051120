// Code your solutions in this file
function writeCards(array, string) {
    const arr = []
    for(let i = 0; i < array.length; i++) {
        arr.push(`Thank you, ${array[i]}, for the wonderful ${string} gift!`)
    }
    return arr
}

function countDown(integer) {
    let i = integer
    while(i >= 0 ) {
        console.log(i)
        i -= 1
    }
}