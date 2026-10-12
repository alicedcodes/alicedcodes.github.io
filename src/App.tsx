import "./App.css";
import { Introduction } from "./components/Introduction";
import { Links } from "./components/Links";
import { Projects } from "./components/Projects";

export default function App() {
  return (
    <main class="mx-auto flex max-w-4xl flex-col gap-4 rounded p-8">
      <Introduction />

      <hr />

      <Links />
      <Projects />
    </main>
  );
}
