import { createMemo, createSignal, onCleanup, onMount, type Component } from "solid-js";

export const AboutSection: Component = () => {
  const [now, setNow] = createSignal(Date.now());

  onMount(() => {
    const timer = setInterval(() => setNow(Date.now()), 15000);
    onCleanup(() => clearInterval(timer));
  });

  const formattedNow = createMemo(() => {
    const d = new Date(now());
    return {
      time: d.toLocaleString(navigator.language, {
        timeZone: "Australia/Brisbane",
        timeStyle: "short",
      }),
      date: d.toLocaleString(navigator.language, {
        timeZone: "Australia/Brisbane",
        dateStyle: "full",
      }),
    };
  });

  return (
    <>
      <h2 id="about">
        <a href="#about" class="pr-2">
          #
        </a>
        About
      </h2>

      <p>
        Hey, I'm <b>Alice</b>, an amateur <b>web developer</b> from <b>Brisbane, Australia</b>,
        where it is <b>{formattedNow().time}</b> on <b>{formattedNow().date}</b>. I'm genderfluid
        and use she/he/they/it pronouns.
      </p>

      <p>
        I make websites in TypeScript utilising SolidJS and TailwindCSS. You can find the code for
        my open-source projects on <a href="https://github.com/alicedcodes">my GitHub account</a>. I
        use the Zed editor on Fedora Linux.
      </p>
    </>
  );
};
