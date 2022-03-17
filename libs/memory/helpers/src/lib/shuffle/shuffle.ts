export const shuffle = <T>(array: T[]): T[] => {
  let counter = array.length;
  const shuffled = [...array];
  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    const index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    const temp = shuffled[counter];
    shuffled[counter] = shuffled[index];
    shuffled[index] = temp;
  }

  return shuffled;
};
