import { useLocalStorage } from 'usehooks-ts';

export function useTheme() {
  const [theme, setTheme] = useLocalStorage('theme', 'auto');
  return [theme, setTheme] as const;
}
