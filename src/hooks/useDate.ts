import { onCleanup, createSignal } from "solid-js";

export const useDate = () => {
  const [date, setDate] = createSignal(new Date());

  const timer = setInterval(() => {
    setDate(new Date());
  }, 5000);

  onCleanup(() => clearInterval(timer));

  return date;
};
