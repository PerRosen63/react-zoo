export const calculateRemainingTimeAnimal = (
  lastFedTime: number,
  hoursUntilNextFeeding = 3
): number | null => {
  const timeInMillis = hoursUntilNextFeeding * 60 * 60 * 1000;
  const now = Date.now();
  const timeSinceLastFed = now - lastFedTime;

  if (timeSinceLastFed >= timeInMillis) {
    return null;
  } else {
    return timeInMillis - timeSinceLastFed;
  }
};

export const calculateRemainingTimeAnimals = (lastFedTime: number) => {
  return calculateRemainingTimeAnimal(lastFedTime, 4);
};
