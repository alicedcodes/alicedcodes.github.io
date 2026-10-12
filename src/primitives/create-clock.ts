import { createSignal, onSettled, type Accessor } from "solid-js";

const msToNextMinute = (t: number) => 60000 - (t % 60000);

export function createClock(): Accessor<number> {
  const [now, setNow] = createSignal(Date.now());

  onSettled(() => {
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      clearTimeout(timer);
      const t = Date.now();
      setNow(t);
      timer = setTimeout(tick, msToNextMinute(t));
    };

    const onVisibility = () => {
      if (document.hidden) clearTimeout(timer);
      else tick();
    };

    timer = setTimeout(tick, msToNextMinute(Date.now()));
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  });

  return now;
}
