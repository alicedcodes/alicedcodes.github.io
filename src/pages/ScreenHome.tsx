import { SiGithub } from '@icons-pack/react-simple-icons';
import { ExternalLink } from '../components/ExternalLink';
import { useDateTime } from '../hooks/useDateTime';
import { useTitle } from '../hooks/useTitle';
import { TIMEZONE } from '../misc/settings';

export function ScreenHome() {
  useTitle('Home');

  const dateTime = useDateTime();

  const aestTime = dateTime.toLocaleString(undefined, {
    timeZone: TIMEZONE,
    hour: '2-digit',
    minute: '2-digit',
  });
  const aestDate = dateTime.toLocaleString(undefined, {
    timeZone: TIMEZONE,
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return (
    <main className="content-wide center">
      <h1>
        <img src="https://avatars.githubusercontent.com/alicedcodes" className="gh-avatar" /> I'm
        Alice
      </h1>

      <p>
        I'm an amateur web developer from Brisbane, Australia, where it is currently{' '}
        <b>{aestTime}</b> on a <b>{aestDate}</b>.
      </p>

      <p>
        You can visit my <SiGithub className="text-icon" /> GitHub profile{' '}
        <ExternalLink href="https://github.com/alicedcodes">here</ExternalLink>.
      </p>
    </main>
  );
}
