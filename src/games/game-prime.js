import getRandomNumber from '../utils/getRandomNumber.js';

import playGame from '../index.js';

import getStringAnswer from '../utils/getStringAnswer.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no". ';

const isPrimeNumber = (num) => {
  let result = true;
  for (let i = 2, max = Math.sqrt(num); i <= max; i += 1) {
    if (num % i === 0) {
      result = false;
    }
  }

  return result;
};
const getQuestionAndAnswer = () => {
  const question = getRandomNumber();
  const result = isPrimeNumber(question);
  const answer = getStringAnswer(result);
  return [question, answer];
};
const startGamePrime = () => {
  playGame(rule, getQuestionAndAnswer);
};
export default startGamePrime;
