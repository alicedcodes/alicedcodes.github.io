import { RadioGroup } from '../components/RadioGroup';
import { useTheme } from '../hooks/useTheme';
import { useTitle } from '../hooks/useTitle';

export function ScreenSettings() {
  useTitle('Settings');

  const [theme, setTheme] = useTheme();

  return (
    <main className="content-narrow center">
      <h1>Settings</h1>

      <h2>Theme</h2>

      <RadioGroup
        value={theme}
        options={[
          {
            value: 'auto',
            label: 'System default',
          },
          {
            value: 'light',
            label: 'Light',
          },
          {
            value: 'dark',
            label: 'Dark',
          },
        ]}
        onChange={(value) => setTheme(value)}
      />
    </main>
  );
}
