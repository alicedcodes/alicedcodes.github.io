import { ExternalLink } from "@lucide/solid";
import { For } from "solid-js";

interface Link {
  label: string;
  url: string;
}

const LINKS: Link[] = [
  {
    label: "Github",
    url: "https://github.com/alicedcodes",
  },
];

export function Links() {
  return (
    <div class="flex justify-center gap-8">
      <For each={LINKS}>
        {(link) => (
          <div class="flex gap-1 rounded-md bg-container p-2 font-bold shadow">
            {link.label}
            <a href={link.url}>
              <ExternalLink />
            </a>
          </div>
        )}
      </For>
    </div>
  );
}
