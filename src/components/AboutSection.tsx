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
        hour: "numeric",
        minute: "2-digit",
      }),
      weekday: d.toLocaleString(navigator.language, {
        timeZone: "Australia/Brisbane",
        weekday: "long",
      }),
      date: d.toLocaleString(navigator.language, {
        timeZone: "Australia/Brisbane",
        day: "numeric",
        month: "long",
        year: "numeric",
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
        I write websites like this one in TypeScript using Solid JS and Tailwind CSS. I use the Zed
        editor with Fedora Linux as my OS. You can check out my code on{" "}
        <a href="https://github.com/alicedcodes">GitHub</a>.
      </p>
    </>
  );
};
