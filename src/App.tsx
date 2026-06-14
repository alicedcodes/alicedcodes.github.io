import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Screen404 from "./screens/Screen404";
import ScreenOverview from "./screens/ScreenOverview";
import ScreenProjects from "./screens/ScreenProjects";

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

export default function App() {
  return <RouterProvider router={router} />;
}
