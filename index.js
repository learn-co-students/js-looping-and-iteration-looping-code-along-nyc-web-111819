function writeCards(arr, event) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i], event);
    newArray.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`);
  }
  return newArray;
}

function countDown(num) {
  let i = num;
  while (i >= 0) {
    console.log(i);
    --i;
  }
}