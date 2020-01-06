function writeCards(names, event){
    let array = []
    for(let x = 0; x < names.length; x++){
        array.push(`Thank you, ${names[x]}, for the wonderful ${event} gift!`)
    }
    return array
}
function countDown(num){
    let i = num
    while(i > -1){
        console.log(i)
        i--
    }
}