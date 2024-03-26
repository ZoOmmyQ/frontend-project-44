import getRandomNumber, { generateProgression } from '../utils/getRandomNumber.js';

import playGame from '../index.js';

const rule = ('What number is missing in the progression? ');

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
