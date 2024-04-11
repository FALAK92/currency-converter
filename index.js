#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
};
let user_Answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"],
    },
    {
        name: "to",
        message: "Enter to currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"],
    },
    {
        name: "amount",
        message: "Enter your Amount",
        type: "number",
    },
]);
let fromAmout = currency[user_Answer.from];
let toAmount = currency[user_Answer.to];
let amount = user_Answer.amount;
let baseAmount = amount / fromAmout;
let convertedAmount = baseAmount * toAmount;
console.log(Math.round(convertedAmount));
