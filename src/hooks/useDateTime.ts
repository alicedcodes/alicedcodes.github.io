import { useEffect, useState } from "react";

export function useDateTime() {
  const [datetime, setDatetime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDatetime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return datetime;
}
