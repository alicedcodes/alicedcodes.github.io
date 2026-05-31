import { useEffect } from "react";

export default function ScreenProjects() {
  useEffect(() => {
    document.title = "alicedcodes - Projects";
  }, []);

  return (
    <>
      <h1>Projects</h1>
      <p>Nothing notable...</p>
    </>
  );
}
