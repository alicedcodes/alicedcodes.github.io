import { useEffect } from "react";
import useDateTime from "../hooks/useDateTime";

export default function ScreenOverview() {
  const { date, time } = useDateTime();

  useEffect(() => {
    document.title = "alicedcodes - Overview";
  }, []);

  return (
    <>
      <h1>
        <img src="https://avatars.githubusercontent.com/alicedcodes" className="icon gh-image" />{" "}
        Hey, I'm Alice!
      </h1>

      <table>
        <tbody>
          <tr>
            <th>Name(s)</th>
            <td>Alice</td>
          </tr>
          <tr>
            <th>Pronouns</th>
            <td>she/her</td>
          </tr>
          <tr>
            <th>Location</th>
            <td>Brisbane, Australia</td>
          </tr>
        </tbody>
      </table>

      <small>
        ({time} on {date})
      </small>

      <p>
        I spend my free time making things using{" "}
        <img src="/icons/typescript.svg" loading="lazy" className="icon" /> JS/TypeScript, and I use{" "}
        <img src="/icons/react.svg" loading="lazy" className="icon" /> React to make websites like
        this one.
      </p>
    </>
  );
}
