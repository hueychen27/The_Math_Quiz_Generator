const answer = document.getElementById("answer");
const displayEquation = document.getElementById("equation");
const mapping = {
    1: "+",
    2: "-",
    3: "*",
    4: "/"
}
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function generateEquation() {
    let number = randomNumber(-30, 30);
    let operator = randomNumber(1, 4);
    let number2 = randomNumber(-40, 50);
    let equation;
    let mathAnswer;
    if (operator == 1) mathAnswer = number + number2;
    if (operator == 2) mathAnswer = number - number2;
    if (operator == 3) mathAnswer = number * number2;
    if (operator == 4) mathAnswer = (number / number2).toFixed(2);
    operator = mapping[`${operator}`]
    equation = `${number} ${operator} ${number2}`;
    displayEquation.innerText = equation;
    console.log(mathAnswer);
}

generateEquation();