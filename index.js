function writeCards(array, string){
  let newArray = []
  for (let i = 0; i < array.length; i++){
    newArray.push(`Thank you, ${array[i]}, for the wonderful ${string} gift!`)
  }
  return newArray
}

function countDown(i){
  while (i >= 0) {
    console.log(i--);
  }
}