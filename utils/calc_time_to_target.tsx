
export function timeToTarget(neededZen: number, earningsPerSecond: number): string {
  if (earningsPerSecond <= 0) {
    return "Earnings per second must be greater than zero!";
  }

  const timeInSeconds = neededZen / earningsPerSecond;

  const seconds = Math.floor(timeInSeconds % 60);
  const minutes = Math.floor((timeInSeconds / 60) % 60);
  const hours = Math.floor((timeInSeconds / 3600) % 24);
  const days = Math.floor((timeInSeconds / 86400) % 7);
  const weeks = Math.floor((timeInSeconds / 604800) % 4);
  const months = Math.floor(timeInSeconds / (604800 * 4.34524)); // Average 4.345 weeks per month

  let timeString = "";

  if (months > 0) timeString += `${months}MNTH `;
  if (weeks > 0 && months < 1) timeString += `${weeks}W `;
  if (days > 0 && months < 1 ) timeString += `${days}D `;
  if (hours > 0 && months < 1) timeString += `${hours}Hr `;
  if (minutes > 0 && weeks < 1 && months < 1) timeString += `${minutes}Min `;
  if (seconds > 0 && hours < 1 && days < 1) timeString += `${seconds}Sec`;
  if (seconds <= 0) timeString = "Already Acheived!"

  return timeString.trim();
}