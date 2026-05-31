import { useEffect } from "react";

export default function Screen404() {
  useEffect(() => {
    document.title = "alicedcodes - Page not found";
  }, []);

  return (
    <>
      <h1>404 - Not Found</h1>
    </>
  );
}
