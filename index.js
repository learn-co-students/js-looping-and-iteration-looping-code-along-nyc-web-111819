// Code your solutions in this file
function writeCards(arrayName, eventName){
    let newArray = []
    for (let index = 0; index < arrayName.length; index++) {
    newArray.push(`Thank you, ${arrayName[index]}, for the wonderful ${eventName} gift!`);
    };
    return newArray;
}

function countDown(integer){
    while (integer > 0) {
        console.log(integer);
        integer -= 1;
    }
    console.log(integer);
}