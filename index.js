// Code your solutions in this file

function writeCards(names, event) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;

}

function countDown(num) {
    let i = 0;
    while (i <= num) {
        console.log(num - i);
        i++
    }
}