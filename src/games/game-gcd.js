import getRandomNumber from '../utils/getRandomNumber.js';

import playGame from '../index.js';

const rule = 'Find the greatest common divisor of given numbers. ';

function getCorrectAnswer(operand1, operand2) {
  return (!operand2) ? operand1 : getCorrectAnswer(operand2, operand1 % operand2);
}
const getQuestionAndAnswer = () => {
  const operand1 = getRandomNumber();
  const operand2 = getRandomNumber();
  const question = `${operand1} ${operand2}`;
  const answer = getCorrectAnswer(operand1, operand2);
  return [question, String(answer)];
};
const startGameGCD = () => {
  playGame(rule, getQuestionAndAnswer);
};
export default startGameGCD;
