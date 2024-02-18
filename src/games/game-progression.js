import getRandomNumber from '../getRandomNumber.js';

import playGame from '../index.js';

const rule = ('What number is missing in the progression? ');

const getQuestionAndAnswer = () => {
  const recLength = 10;
  const firstNum = getRandomNumber();
  const diffProgression = getRandomNumber(0, recLength);
  const skip = getRandomNumber(0, 10);
  const progression = [];
  for (let i = 0; i < recLength; i += 1) {
    progression.push(firstNum + diffProgression * i);
  }
  const answer = progression[skip];
  progression[skip] = '..';
  const question = progression.join(' ');
  return [question, String(answer)];
};
const initGameProgression = () => {
  playGame(rule, getQuestionAndAnswer);
};
export default initGameProgression;
