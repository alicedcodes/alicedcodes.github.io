import { type Component } from "solid-js";

import { AboutSection } from "./components/AboutSection";
import { ProjectsSection } from "./components/ProjectsSection";

const App: Component = () => {
  return (
    <div class="flex min-h-dvh flex-col bg-app text-text">
      <nav class="z-10 h-12 bg-header shadow"></nav>
      <div class="flex-auto p-8">
        <main class="mx-auto max-w-4xl">
          <AboutSection />
          <ProjectsSection />
        </main>
      </div>
    </div>
  );
};

export default App;
