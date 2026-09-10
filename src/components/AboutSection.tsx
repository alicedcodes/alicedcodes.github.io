import type { Component } from "solid-js";

export const AboutSection: Component = () => {
  return (
    <>
      <h2 id="about">
        <a href="#about" class="pr-2">
          #
        </a>
        About
      </h2>

      <p>
        Hey, I'm <b>Alice</b>, an amateur <b>web developer</b> from <b>Brisbane, Australia</b>. I'm
        genderfluid and use she/he/they/it pronouns.
      </p>

      <p>
        I write websites in TypeScript using Solid JS and Tailwind CSS. My preferred editor is Zed
        and my current OS is Fedora Linux.
      </p>
    </>
  );
};
