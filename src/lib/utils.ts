import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function timeSince(timeStamp: Date) {
  const now = new Date();
  const secondsPast = (now.getTime() - timeStamp.getTime()) / 1000;
  if (secondsPast < 60) {
    return secondsPast + 's ago';
  }
  if (secondsPast < 3600) {
    return Math.floor(secondsPast / 60) + 'm ago';
  }
  if (secondsPast <= 86400) {
    return Math.floor(secondsPast / 3600) + 'h ago';
  }
  if (secondsPast > 86400) {
    const day = timeStamp.getDate();
    const month = timeStamp
      .toDateString()
      .match(/ [a-zA-Z]*/)![0]
      .replace(' ', '');

    const year =
      timeStamp.getFullYear() == now.getFullYear()
        ? ''
        : ' ' + timeStamp.getFullYear();
    return 'on ' + day + ' ' + month + year;
  }
}