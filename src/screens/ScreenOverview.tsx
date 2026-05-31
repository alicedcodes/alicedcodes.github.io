import { useEffect } from "react";
import useDateTime from "../hooks/useDateTime";

export default function ScreenOverview() {
  const { date, time } = useDateTime();

  useEffect(() => {
    document.title = "alicedcodes - Overview";
  }, []);

  return (
    <>
      <h1>Hey, I'm Alice!</h1>

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

      <p>
        It's {time} on {date} in Brisbane.
      </p>
    </>
  );
}
