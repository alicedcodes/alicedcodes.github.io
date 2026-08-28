import { createMemo } from "solid-js";

import { useDate } from "../hooks/useDate";

export const AboutPage = () => {
  const date = useDate();

  const formattedDateTime = createMemo(() => {
    const d = date();
    const lang = navigator.language;

    return {
      time: d.toLocaleString(lang, { hour: "numeric", minute: "2-digit" }),
      weekday: d.toLocaleString(lang, { weekday: "long" }),
      date: d.toLocaleString(lang, { day: "numeric", month: "long", year: "numeric" }),
    };
  });

  return (
    <main class="page">
      <h1>
        <img
          class="inline h-lh rounded align-bottom shadow"
          src="https://avatars.githubusercontent.com/u/289128204"
          alt="Alice's Avatar"
        />{" "}
        Hey, I'm Alice!
      </h1>

      <p>
        I'm an amateur web developer from <b>Brisbane, Australia</b>, where it is{" "}
        <b>{formattedDateTime().time}</b> on <b>{formattedDateTime().weekday}</b>,{" "}
        <b>{formattedDateTime().date}</b>. I'm <b>genderfluid</b>, though I tend to lean towards{" "}
        <b>she/her</b> pronouns.
      </p>

      <p>
        I use tools like <b>SolidJS</b> and <b>TailwindCSS</b> to create websites like this one. You
        can check out my code at my <a href="https://github.com/alicedcodes">GitHub profile</a>. My
        editor of choice is <b>Zed</b>, and my preferred OS is <b>Fedora Linux</b>.
      </p>
    </main>
  );
};
