import { createMemo } from "solid-js";

import "./App.css";
import { createClock } from "./primitives/create-clock";

const TIME_ZONE = "Australia/Brisbane";

const timeFormat = new Intl.DateTimeFormat(navigator.language, {
  timeZone: TIME_ZONE,
  timeStyle: "short",
});
const dayFormat = new Intl.DateTimeFormat(navigator.language, {
  timeZone: TIME_ZONE,
  weekday: "long",
});

export default function App() {
  const now = createClock();

  const timeAndDay = createMemo(() => {
    const n = now();
    return `${timeFormat.format(n)} on ${dayFormat.format(n)}`;
  });

  return (
    <main class="mx-auto flex max-w-4xl flex-col gap-4 rounded p-8">
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
    </main>
  );
}
