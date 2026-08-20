import { For } from "solid-js";

const PROJECTS: {
  name: string;
  description: string;
  path: string;
  image: string;
}[] = [
  {
    name: "Infinite Minesweeper",
    description: "A Minesweeper game that never ends.",
    path: "https://alicedcodes.github.io/infinite-minesweeper",
    image: "https://alicedcodes.github.io/infinite-minesweeper/preview.png",
  },
];

export const ProjectsPage = () => {
  return (
    <main class="page">
      <For each={PROJECTS}>
        {(p) => (
          <a class="flex flex-col overflow-hidden rounded-lg bg-menu shadow" href={p.path}>
            <img class="aspect-120/63" src={p.image} />
            <div class="px-4">
              <h2>{p.name}</h2>
              <p>{p.description}</p>
            </div>
          </a>
        )}
      </For>
    </main>
  );
};
