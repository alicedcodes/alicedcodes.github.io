import { For, type Component } from "solid-js";

interface Project {
  id: string;
  name: string;
  description: string;
  link: string;
}

const PROJECTS: Project[] = [
  {
    id: "infinite-minesweeper",
    name: "Infinite Minesweeper",
    description:
      "An infinitely playable game of Minesweeper with features that provide a smoother experience. Playable on the web, it is completely free without sacrificing quality.",
    link: "https://alicedcodes.github.io/infinite-minesweeper",
  },
];

export const ProjectsSection: Component = () => {
  return (
    <>
      <h2 id="projects">
        <a href="#projects" class="pr-2">
          #
        </a>
        Projects
      </h2>

      <For each={PROJECTS}>
        {(project) => (
          <>
            <h3 id={project.id}>
              <a href={`#${project.id}`} class="pr-2">
                #
              </a>
              {project.name}
            </h3>

            <a
              href={project.link}
              class="rounded-full bg-button px-4 py-1 text-xl font-bold text-text no-underline shadow"
            >
              GO!
            </a>

            <p>{project.description}</p>
          </>
        )}
      </For>
    </>
  );
};
