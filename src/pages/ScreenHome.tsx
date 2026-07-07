import { SiGithub } from "@icons-pack/react-simple-icons";
import {
  CatIcon,
  Gamepad2Icon,
  GamepadIcon,
  HeartIcon,
  KeyboardIcon,
  MusicIcon,
} from "lucide-react";
import { ExternalLink } from "../components/ExternalLink";
import { ImageGallery } from "../components/ImageGallery";
import { Note } from "../components/Note";
import { useDateTime } from "../hooks/useDateTime";
import { useTitle } from "../hooks/useTitle";
import { TIMEZONE } from "../misc/settings";
import styles from "./ScreenHome.module.css";

export function ScreenHome() {
  useTitle("About Me");

  const dateTime = useDateTime();

  const aestTime = dateTime.toLocaleString(undefined, {
    timeZone: TIMEZONE,
    hour: "2-digit",
    minute: "2-digit",
  });
  const aestDate = dateTime.toLocaleString(undefined, {
    timeZone: TIMEZONE,
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <main className="content-wide center">
      <h1>
        <img src="https://avatars.githubusercontent.com/alicedcodes" className="gh-avatar" /> I'm
        Alice
      </h1>

      <p>
        I'm an amateur web developer from <b>Brisbane, Australia</b>, where it is currently{" "}
        <b>{aestTime}</b> on a <b>{aestDate}</b>. I'm genderfluid but you can refer to me with{" "}
        <b>she/her</b> pronouns.
      </p>

      <p>
        You can visit my <SiGithub className="text-icon" /> GitHub profile{" "}
        <ExternalLink href="https://github.com/alicedcodes">here</ExternalLink>.
      </p>

      <ImageGallery
        images={[
          {
            src: "./bobcat.jpg",
            label: "Bobcat Idiboo",
          },
          {
            src: "./sylvie.jpg",
            label: "Sylvie Destroyer of Worlds",
          },
        ]}
      />

      <hr />

      <h2>
        <GamepadIcon className="text-icon" /> Gaming
      </h2>

      <h3>
        What Am I Playing? <Note>July, 2026</Note>
      </h3>

      <ul>
        <li>
          <Gamepad2Icon className="text-icon" />{" "}
          <span className={styles.rhythmHeavenGroove}>Rhythm Heaven Groove</span> <Note>NEW!</Note>
        </li>
        <li>
          <Gamepad2Icon className="text-icon" />{" "}
          <span className={styles.pokemonViolet}>Pokémon Violet</span> <Note>(replay)</Note>
        </li>
      </ul>

      <h3>Favourite Games</h3>

      <ol>
        <li>
          <Gamepad2Icon className="text-icon" />{" "}
          <span className={styles.silksong}>Hollow Knight: Silksong</span>{" "}
          <Note>Sea of Sorrow tomorrow!</Note>
        </li>
        <li>
          <Gamepad2Icon className="text-icon" />{" "}
          <span className={styles.pokemonZA}>Pokémon Z-A</span>
        </li>
        <li>
          <KeyboardIcon className="text-icon" />{" "}
          <span className={styles.slayTheSpire2}>Slay the Spire 2</span> <Note>NEW!</Note>
        </li>
      </ol>

      <hr />

      <h2>
        <MusicIcon className="text-icon" /> Favourite Albums
      </h2>

      <ImageGallery
        images={[
          {
            src: "./beatles-love.png",
            label: "Love (The Beatles)",
          },
          {
            src: "./jazz-emu-ego-death.jpg",
            label: "Ego Death (Jazz Emu)",
          },
          {
            src: "./stomachbook-goodnight-hypnopop.jpg",
            label: "GOODNIGHT HYPNOPOP (STOMACHBOOK)",
          },
        ]}
      />
    </main>
  );
}
