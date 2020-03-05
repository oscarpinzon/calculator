"use strict";

function add(firstNum, secondNum) {
  return firstNum + secondNum;
}

function substract(firstNum, secondNum) {
  return firstNum - secondNum;
}

function multiply(firstNum, secondNum) {
  return firstNum * secondNum;
}

function divide(firstNum, secondNum) {
  if (secondNum === 0) {
    return "ERROR";
  }
  return firstNum / secondNum;
}

function operate(operator, firstNum, secondNum) {
    //TODO: Handle what happens when not all parameters are provided
    //Operate is called when pressing "equal"?
  switch (operator) {
    case "add":
      return add(firstNum, secondNum);
    case "substract":
      return substract(firstNum, secondNum);
    case "multiply":
      return multiply(firstNum, secondNum);
    case "divide":
      return divide(firstNum, secondNum);
    default:
      return "ERROR";
  }
}