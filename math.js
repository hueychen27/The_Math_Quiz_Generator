const answer = document.getElementById("answer");
const displayEquation = document.getElementById("equation");
const mapping = {
    1: "+",
    2: "-",
    3: "*",
    4: "/"
}
let numbers = {
    num: null,
    operator: null,
    num2: null,
    equation: null,
    answer: null
}
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function generateEquation() {
    numbers.num = randomNumber(-30, 30);
    numbers.operator = randomNumber(1, 4);
    numbers.num2 = randomNumber(-40, 50);
    if ((numbers.num == 0 || numbers.num2 == 0) && numbers.operator == 4) generateEquation();
    if (numbers.operator == 1) numbers.answer = numbers.num + numbers.num2;
    if (numbers.operator == 2) numbers.answer = numbers.num - numbers.num2;
    if (numbers.operator == 3) numbers.answer = numbers.num * numbers.num2;
    if (numbers.operator == 4) {
        let tmp = numbers.num / numbers.num2;
        if (tmp % 1 != 0) numbers.answer = numbers.num / numbers.num2;
        if (parseFloat(tmp) > 0) numbers.answer = (numbers.num / numbers.num2).toPrecision(2);
    }
    numbers.operator = mapping[`${numbers.operator}`];
    numbers.equation = `${numbers.num} ${numbers.operator} ${numbers.num2}`;
    displayEquation.innerText = numbers.equation;
    console.log(numbers.answer);
}

generateEquation();

function submit() {
    const results = document.getElementById("results");
    if (answer.value == numbers.answer) {
        console.log("correct")
        results.innerText = "Correct!";
        results.className = "show correct";
        generateEquation();
        return;
    }
    console.log("incorrect")
    results.innerText = "Incorrect. The right answer is " + numbers.answer + ".";
    results.className = "show incorrect";
    generateEquation();
}