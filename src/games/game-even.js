import getRandomNumber from '../utils/getRandomNumber.js';

import getStringAnswer from '../utils/getStringAnswer.js';

import playGame from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenNumber = (num) => num % 2 === 0;

const getQuestionAndAnswer = () => {
  const question = getRandomNumber();
  const result = isEvenNumber(question);
  const answer = getStringAnswer(result);
  return [question, answer];
};

const startGameEven = () => {
  playGame(rule, getQuestionAndAnswer);
};

export default startGameEven;
