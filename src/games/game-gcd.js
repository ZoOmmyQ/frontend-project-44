import getRandomNumber from '../getRandomNumber.js';

import playGame from '../index.js';

const rule = 'Find the greatest common divisor of given numbers. ';

const getCorrectAnswer = (operand1, operand2) => {
  if (!operand2) {
    return operand1;
  } return getCorrectAnswer(operand2, operand1 % operand2);
};
const getQuestionAndAnswer = () => {
  const operand1 = getRandomNumber();
  const operand2 = getRandomNumber();
  const question = `${operand1} ${operand2}`;
  const answer = getCorrectAnswer(operand1, operand2);
  return [question, String(answer)];
};
const initGameGCD = () => {
  playGame(rule, getQuestionAndAnswer);
};
export default initGameGCD;
