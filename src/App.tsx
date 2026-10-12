import "./App.css";
import { Introduction } from "./components/Introduction";

export default function App() {
  return (
    <main class="mx-auto flex max-w-4xl flex-col gap-4 rounded p-8">
      <Introduction />
    </main>
  );
}
