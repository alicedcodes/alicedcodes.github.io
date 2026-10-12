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

        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/svg+xml" sizes="any" href="/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        <title>Alice Driscoll</title>

        <HydrationScript />
      </head>
      <body>{props.children}</body>
    </html>
  );
}
