import { useEffect, useState } from "react";

const getFormattedDateTime = () => {
  const now = new Date();
  const timeZone = "Australia/Brisbane";

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
    const intervalId = setInterval(() => {
      setDateTime(getFormattedDateTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return dateTime;
}
