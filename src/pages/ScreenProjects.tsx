import { useTitle } from "../hooks/useTitle";

export function ScreenProjects() {
  useTitle("Projects");

  return (
    <main className="content-wide center">
      <h1>Projects</h1>

      <p>Nothing public and notable.</p>
    </main>
  );
}
