const getRandomNumber = (minNum = 0, maxNum = 100) => Math.floor(Math.random() * maxNum) + minNum;

export default getRandomNumber;

export const generateProgression = () => {
  const progressionLength = 10;
  const firstNum = getRandomNumber();
  const diffProgression = getRandomNumber(0, progressionLength);
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(firstNum + diffProgression * i);
  }
  return progression;
};
