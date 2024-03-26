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
      throw new Error(`Unknown operation state: '${operation}'!`);
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
const startGameCalc = () => {
  playGame(rule, getQuestionAndAnswer);
};
export default startGameCalc;
