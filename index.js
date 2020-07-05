// Code your solutions in this file
function writeCards(names, eventType) {
  let messageArray = [];
  let message = "";
  for (let i = 0; i < names.length; i++) {
    let message = (`Thank you, ${names[i]}, for the wonderful ${eventType} gift!`);
    messageArray.push(message);
  }
  return messageArray;
}

function countDown(num){
  let startValue = num;
  while (startValue >= 0) {
    console.log(startValue--);
  }
}
