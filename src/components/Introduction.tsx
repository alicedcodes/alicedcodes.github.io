import { createMemo } from "solid-js";

import { createClock } from "../primitives/create-clock";

const TIME_ZONE = "Australia/Brisbane";

const timeFormat = new Intl.DateTimeFormat(navigator.language, {
  timeZone: TIME_ZONE,
  timeStyle: "short",
});
const dayFormat = new Intl.DateTimeFormat(navigator.language, {
  timeZone: TIME_ZONE,
  weekday: "long",
});

export function Introduction() {
  const now = createClock();

  const timeAndDay = createMemo(() => {
    const n = now();
    return `${timeFormat.format(n)} on ${dayFormat.format(n)}`;
  });

  return (
    <>
      <h1>Hi, I'm Alice!</h1>

      <p>
        I'm an amateur web developer from Australia, where it's <b>{timeAndDay()}</b>. I make
        websites like this one with{" "}
        <b>
          <a href="https://solidjs.com">SolidJS</a>
        </b>
        —for its high performance and low build size—and <b>TailwindCSS</b>, using{" "}
        <b>vanilla TypeScript</b> for lighter projects.
      </p>

      <p>
        I run <a href="https://zed.dev">Zed</a> on Fedora Linux for a faster and lighter editor
        compared to VSCode, paired with Vite+ for JavaScript development, and Git for version
        control.
      </p>
    </>
  );
}
