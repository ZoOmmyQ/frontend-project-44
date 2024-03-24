import getRandomNumber from '../utils/getRandomNumber.js';

import playGame from '../index.js';

const rule = 'What is the result of the expression?';
const operations = ['+', '-', '*'];
const getCorrectAnswer = (operand1, operand2, operation) => {
  switch (operation) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      return null;
  }
};
const getQuestionAndAnswer = () => {
  const operand1 = getRandomNumber();
  const operand2 = getRandomNumber();
  const operation = operations[getRandomNumber(0, operations.length)];
  const question = `${operand1} ${operation} ${operand2}`;
  const answer = getCorrectAnswer(operand1, operand2, operation);
  return [question, String(answer)];
};
const initGameCalc = () => {
  playGame(rule, getQuestionAndAnswer);
};
export default initGameCalc;
