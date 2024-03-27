import getRandomNumber from '../utils/getRandomNumber.js';

import playGame from '../index.js';

const rule = ('What number is missing in the progression? ');

const generateProgression = () => {
  const progressionLength = 10;
  const firstNum = getRandomNumber();
  const diffProgression = getRandomNumber(0, progressionLength);
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(firstNum + diffProgression * i);
  }
  return progression;
};

const getQuestionAndAnswer = () => {
  const progressionLength = 10;
  const progression = generateProgression(progressionLength);
  const hiddenIndex = getRandomNumber(0, progressionLength);
  const answer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return [question, String(answer)];
};
const startGameProgression = () => {
  playGame(rule, getQuestionAndAnswer);
};
export default startGameProgression;
