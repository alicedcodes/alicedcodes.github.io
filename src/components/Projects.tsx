import { ExternalLink } from "@lucide/solid";
import { For } from "solid-js";

interface Project {
  label: string;
  summary: string;
  url: string;
}

const PROJECTS: Project[] = [
  {
    label: "Infinite Minesweeper",
    summary:
      "An infinite game of Minesweeper playable on the web with modern features and simple gameplay.",
    url: "https://alicedcodes.github.io/infinite-minesweeper",
  },
  {
    label: "Infinite Minesweeper X",
    summary:
      "An experimental version of Infinite Minesweeper featuring better performance and lower memory usage.",
    url: "https://alicedcodes.github.io/infinite-minesweeper-x",
  },
];

export function Projects() {
  return (
    <>
      <div class="flex flex-wrap justify-center gap-8">
        <For each={PROJECTS}>
          {(project) => (
            <div class="flex h-48 w-96 flex-col rounded-xl bg-container p-2 shadow">
              <h4 class="flex rounded-lg bg-background p-2 inset-shadow-2xs">
                {project.label}
                <a class="ml-auto self-center" href={project.url}>
                  <ExternalLink />
                </a>
              </h4>
              <div class="flex-1 p-2">{project.summary}</div>
            </div>
          )}
        </For>
      </div>
    </>
  );
}
