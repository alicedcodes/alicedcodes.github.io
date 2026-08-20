import { FoldersIcon, LucideIcon, UserIcon } from "lucide-solid";
import { createSignal, For, Match, onCleanup, onMount, Switch } from "solid-js";

import { AboutPage } from "./pages/AboutPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { cn } from "./utils/cs";

const PAGES: { label: string; path: string; icon: LucideIcon }[] = [
  { label: "Projects", path: "#", icon: FoldersIcon },
  { label: "About", path: "#about", icon: UserIcon },
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
      <nav class="z-10 flex h-10 shrink-0 gap-2 bg-header px-4">
        <For each={PAGES}>
          {(p) => (
            <a
              class={cn(
                "tab relative flex h-8 w-48 items-center gap-2 px-2",
                hash() === p.path.substring(1)
                  ? ["self-end rounded-t-md bg-app-bg text-app-text [--br:var(--radius-md)]"]
                  : ["self-center rounded bg-tab-bg text-tab-text shadow"],
              )}
              href={p.path}
            >
              <p.icon class="h-5" />
              {p.label}
            </a>
          )}
        </For>
      </nav>
      <div class="flex-auto p-8">
        <Switch>
          <Match when={hash() === ""}>
            <ProjectsPage />
          </Match>
          <Match when={hash() === "about"}>
            <AboutPage />
          </Match>
        </Switch>
      </div>
    </div>
  );
};

export default App;
