function writeCards(names, event) {
    let array = []
    for (let i = 0; i < names.length; i++) {
        array[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
    }
    return array
}

function countDown(number) {
  while (number > -1) {
    console.log(number--);
  }
}
