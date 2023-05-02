function randomNumber(minimum , maximum) {
    return Math.floor(Math.random() * (maximum - minimum )) ;
}
const random = randomNumber(1, 100);
console.log(random); // output: a random integer between 1 and 100