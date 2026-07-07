import { useTitle } from "../hooks/useTitle";

export function Screen404() {
  useTitle("404");

  return (
    <main className="content-wide center">
      <h1>404</h1>
      <h2>Page Not Found</h2>
    </main>
  );
}
