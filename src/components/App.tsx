import { useLayoutEffect } from "react";
import {
  createBrowserRouter,
  NavLink,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { useMediaQuery } from "usehooks-ts";
import { useTheme } from "../hooks/useTheme";
import Screen404 from "../screens/Screen404";
import ScreenOverview from "../screens/ScreenOverview";
import ScreenProjects from "../screens/ScreenProjects";
import styles from "./App.module.css";
import { IconHome, IconProject } from "./Icons";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <ScreenOverview /> },
      { path: "projects", element: <ScreenProjects /> },
      { path: "*", element: <Screen404 /> },
    ],
  },
]);

function Layout() {
  const [theme, setTheme] = useTheme();
  const isDarkScheme = useMediaQuery("(prefers-color-scheme: dark)");
  const isDark = theme === "dark" || (theme === "auto" && isDarkScheme);
  const dataTheme = theme === "auto" ? (isDark ? "dark" : "light") : theme;
  useLayoutEffect(() => {
    document.documentElement.dataset.theme = dataTheme;
  }, [dataTheme]);

  const createLinks = (
    paths: {
      path: string;
      label: string;
      icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    }[],
  ) => {
    return paths.map(({ path, label, icon: Icon }) => (
      <NavLink to={path} className={styles.link}>
        <Icon className={styles.linkIcon} />
        <div>{label}</div>
      </NavLink>
    ));
  };

  return (
    <div className={styles.app}>
      <div className={styles.sidebar}>
        <div className={styles.links}>
          {createLinks([
            { path: "/", label: "Overview", icon: IconHome },
            { path: "/projects", label: "Projects", icon: IconProject },
          ])}
        </div>
        <div className={styles.themeSettings}>
          {[
            { value: "auto", label: "System" },
            { value: "light", label: "Light" },
            { value: "dark", label: "Dark" },
          ].map((option) => (
            <label key={option.value} className={styles.themeOption}>
              <input
                type="radio"
                name="theme"
                value={option.value}
                checked={theme === option.value}
                onChange={(e) => setTheme(e.target.value)}
              />
              {option.label}
            </label>
          ))}
        </div>
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return <RouterProvider router={router} />;
}
