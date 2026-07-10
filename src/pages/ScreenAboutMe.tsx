import { SiGithub } from "@icons-pack/react-simple-icons";
import clsx from "clsx";
import { Gamepad2Icon, GamepadIcon, KeyboardIcon, MusicIcon } from "lucide-react";
import { ExternalLink } from "../components/ExternalLink";
import { ImageGallery } from "../components/ImageGallery";
import { Note } from "../components/Note";
import { useDateTime } from "../hooks/useDateTime";
import { useTitle } from "../hooks/useTitle";
import { TIMEZONE } from "../misc/settings";
import styles from "./ScreenAboutMe.module.css";

export function ScreenAboutMe() {
  useTitle("About Me");

  const dateTime = useDateTime();

  const aestTime = dateTime.toLocaleString(navigator.language, {
    timeZone: TIMEZONE,
    hour: "2-digit",
    minute: "2-digit",
  });

  const aestDate = dateTime.toLocaleString(navigator.language, {
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
            src: "./bobcat.webp",
            label: "Bobcat Idiboo",
          },
          {
            src: "./sylvie.webp",
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

      {/* TODO: (concept) Put each game in a case with its cover art. */}

      <ul>
        <li>
          <Gamepad2Icon className="text-icon" />{" "}
          <a
            href="https://www.nintendo.com/my/switch/bflta/"
            className={clsx(styles.colouredLink, styles.rhythmHeavenGroove)}
          >
            Rhythm Heaven Groove
          </a>{" "}
          <Note>NEW!</Note>
        </li>
        <li>
          <Gamepad2Icon className="text-icon" />{" "}
          <a
            href="https://scarletviolet.pokemon.com/"
            className={clsx(styles.colouredLink, styles.pokemonViolet)}
          >
            Pokémon Violet
          </a>{" "}
          <Note>(replay)</Note>
        </li>
      </ul>

      <h3>Favourite Games</h3>

      <ol>
        <li>
          <Gamepad2Icon className="text-icon" />{" "}
          <a
            href="https://hollowknightsilksong.com/"
            className={clsx(styles.colouredLink, styles.silksong)}
          >
            Hollow Knight: Silksong
          </a>{" "}
          <Note>Sea of Sorrow tomorrow!</Note>
        </li>
        <li>
          <Gamepad2Icon className="text-icon" />{" "}
          {/* TODO: Update to permanent URL (e.g. https://legends.za.pokemon...) when the next Legends game is announced and the site changes. */}
          <a
            href="https://legends.pokemon.com/"
            className={clsx(styles.colouredLink, styles.pokemonLegendsZA)}
          >
            Pokémon Legends Z-A
          </a>
        </li>
        <li>
          <KeyboardIcon className="text-icon" />{" "}
          <a
            href="https://www.megacrit.com/games/#slay-the-spire-2"
            className={clsx(styles.colouredLink, styles.slayTheSpire2)}
          >
            Slay the Spire 2
          </a>
        </li>
      </ol>

      <hr />

      <h2>
        <MusicIcon className="text-icon" /> Music
      </h2>

      <h3>Favourite Artists</h3>

      <ImageGallery
        images={[
          {
            src: "./the-beatles.webp",
            label: "The Beatles",
            link: "https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2",
          },
          {
            src: "./jazz-emu.webp",
            label: "Jazz Emu",
            link: "https://open.spotify.com/artist/69W52X4tUONDDDb6FmGtl6",
          },
          {
            src: "./astrid.webp",
            label: "Astrid",
            link: "https://open.spotify.com/artist/5XnEaGhnWsAywwADYeeZi1",
          },
        ]}
      />
    </main>
  );
}
