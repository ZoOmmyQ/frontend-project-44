import getRandomNumber from '../utils/getRandomNumber.js';

import playGame from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no". ';

const isPrimeNumber = (num) => {
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  } return num > 1;
};
const getQuestionAndAnswer = () => {
  const question = getRandomNumber();
  const answer = isPrimeNumber(question) ? 'yes' : 'no';
  return [question, answer];
};
const initGamePrime = () => {
  playGame(rule, getQuestionAndAnswer);
};
export default initGamePrime;
