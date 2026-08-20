import { createSignal, For, Match, onCleanup, onMount, Switch } from "solid-js";

import { cn } from "./utils/cs";

const PAGES: { label: string; path: string }[] = [
  { label: "Projects", path: "#" },
  { label: "About", path: "#about" },
];

const App = () => {
  const [hash, setHash] = createSignal(window.location.hash.substring(1));

  onMount(() => {
    const handleHashChange = () => setHash(window.location.hash.substring(1));
    window.addEventListener("hashchange", handleHashChange);
    onCleanup(() => window.removeEventListener("hashchange", handleHashChange));
  });

  return (
    <div class="flex h-full flex-col bg-app-bg text-app-text">
      <nav class="z-10 flex h-12 shrink-0 gap-4 bg-header-bg p-2 shadow">
        <For each={PAGES}>
          {(p) => (
            <a
              class={cn(
                "flex w-32 items-center justify-center rounded bg-tab-bg text-tab-text shadow",
                hash() === p.path.substring(1) && "font-bold",
              )}
              href={p.path}
            >
              {p.label}
            </a>
          )}
        </For>
      </nav>
      <main class="flex-auto">
        <Switch>
          <Match when={hash() === ""}>
            <h1>Projects</h1>
          </Match>
          <Match when={hash() === "about"}>
            <h1>About</h1>
          </Match>
        </Switch>
      </main>
    </div>
  );
};

export default App;
