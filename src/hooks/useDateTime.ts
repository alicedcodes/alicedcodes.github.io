import { useEffect, useState } from "react";

const getFormattedDateTime = () => {
  const now = new Date();
  const timeZone = `Australia/Brisbane`;

  return {
    date: new Intl.DateTimeFormat(undefined, {
      timeZone,
      dateStyle: "short",
    }).format(now),
    time: new Intl.DateTimeFormat(undefined, {
      timeZone,
      timeStyle: "short",
    }).format(now),
  };
};

export default function useDateTime() {
  const [dateTime, setDateTime] = useState(getFormattedDateTime);

  useEffect(() => {
    const tick = () => {
      setDateTime(getFormattedDateTime());
    };

    const msUntilNextMinute = 60000 - (Date.now() % 60000);

    let intervalId: number;

    const timeoutId = setTimeout(() => {
      tick();
      intervalId = setInterval(tick, 60000);
    }, msUntilNextMinute);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  return dateTime;
}
