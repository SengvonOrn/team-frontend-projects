import { useState, useEffect } from "react";

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function useCountdown(initialTime: TimeLeft): TimeLeft {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          seconds = 59;
          minutes--;
        } else if (hours > 0) {
          seconds = 59;
          minutes = 59;
          hours--;
        } else if (days > 0) {
          seconds = 59;
          minutes = 59;
          hours = 23;
          days--;
        } else {
          // Stop timer at 0
          clearInterval(timer);
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return timeLeft;
}
