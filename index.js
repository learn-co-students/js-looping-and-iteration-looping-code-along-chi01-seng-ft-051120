function writeCards(names, eventName){
  let allThanks = []
  for (let i = 0; i < names.length; i ++){
    allThanks.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`)
  }
  return allThanks
}



function countDown(i) {
  while (i > -1){
  console.log(i)
  i --
  }
}