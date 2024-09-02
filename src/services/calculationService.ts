export const calculateRemainingTime = (lastFedTime: number): number | null => {
  const threeHoursInMillis = 3 * 60 * 60 * 1000;
  const now = Date.now();
  const timeSinceLastFed = now - lastFedTime;

  console.log("Tid sedan matning", timeSinceLastFed);

  if (timeSinceLastFed >= threeHoursInMillis) {
    return null;
  } else {
    return threeHoursInMillis - timeSinceLastFed;
  }
};
