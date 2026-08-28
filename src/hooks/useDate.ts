import { Temporal } from "@js-temporal/polyfill";
import { createSignal, onMount, onCleanup } from "solid-js";

const TIMEZONE = "Australia/Brisbane";

export const useDate = () => {
  const [date, setDate] = createSignal(Temporal.Now.zonedDateTimeISO(TIMEZONE));

  onMount(() => {
    const timer = setInterval(() => {
      setDate(Temporal.Now.zonedDateTimeISO(TIMEZONE));
    }, 5000);

    onCleanup(() => clearInterval(timer));
  });

  return date;
};
