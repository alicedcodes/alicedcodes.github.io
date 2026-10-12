import { HydrationScript } from "@solidjs/web";
import type { ParentProps } from "solid-js";

export default function Document(props: ParentProps) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#f4f4f5" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#27272a" media="(prefers-color-scheme: dark)" />
        <title>Alice Driscoll</title>
        <HydrationScript />
      </head>
      <body>{props.children}</body>
    </html>
  );
}
