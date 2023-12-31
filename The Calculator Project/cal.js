#!/usr/bin/env node
import inquirer from "inquirer";
//import{add} from "./addition.js";
//import{subtract} from "./subtraction.js";
//import{multiply} from "./multiplication.js";
//import{divide} from "./division.js";
let answer = await inquirer.prompt([
    {
        type: "number",
        name: "numberOne",
        message: " Enter your first number",
    },
    {
        type: "number",
        name: "numberTwo",
        message: "Enter your second number",
    },
    {
        type: "list",
        name: "operator",
        choices: ["/", "*", "+", "-"],
        message: "Choose your operator",
    }
]);
const { numberOne, numberTwo, operator } = answer;
if (numberOne && numberTwo && operator) {
    let result = 0;
    if (operator === "/") {
        result = numberOne / numberTwo;
    }
    else if (operator === "*") {
        result = numberOne * numberTwo;
    }
    else if (operator === "+") {
        result = numberOne + numberTwo;
    }
    else if (operator === "-") {
        result = numberOne - numberTwo;
    }
    console.log(`your answer is : ${result}`);
}
