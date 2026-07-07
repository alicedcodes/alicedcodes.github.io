import { useEffect } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { useMediaQuery } from "usehooks-ts";
import { Navbar } from "./components/Navbar";
import { useTheme } from "./hooks/useTheme";
import { Screen404 } from "./pages/Screen404";
import { ScreenHome } from "./pages/ScreenHome";
import { ScreenProjects } from "./pages/ScreenProjects";
import { ScreenSettings } from "./pages/ScreenSettings";
import styles from "./App.module.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <ScreenHome /> },
      { path: "projects", element: <ScreenProjects /> },
      { path: "settings", element: <ScreenSettings /> },
      { path: "*", element: <Screen404 /> },
    ],
  },
]);

export const App = () => <RouterProvider router={router} />;

function Layout() {
  const [theme] = useTheme();
  const isDarkTheme = useMediaQuery("(prefers-color-scheme: dark)");
  const dataTheme = theme === "auto" ? (isDarkTheme ? "dark" : "light") : theme;

  useEffect(() => {
    document.documentElement.dataset.theme = dataTheme;
  }, [dataTheme]);

  return (
    <div className={styles.app}>
      <Navbar className={styles.navbar} />
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
}
