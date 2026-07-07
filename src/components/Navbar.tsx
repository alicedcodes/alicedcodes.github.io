import clsx from "clsx";
import { FoldersIcon, HomeIcon, SettingsIcon } from "lucide-react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

interface Page {
  path: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label?: string;
  spaceLeft?: true;
}

export function Navbar({ className }: { className?: string }) {
  const pages: Page[] = [
    {
      path: "/",
      icon: HomeIcon,
      label: "About Me",
    },
    {
      path: "/projects",
      icon: FoldersIcon,
      label: "Projects",
    },
    {
      path: "/settings",
      icon: SettingsIcon,
      spaceLeft: true,
    },
  ];

  return (
    <nav className={clsx(styles.navbar, className)}>
      {pages.map(({ icon: Icon, ...page }) => (
        <NavLink
          key={page.path}
          to={page.path}
          data-space-left={page.spaceLeft}
          className={styles.tab}
        >
          <Icon className={styles.icon} />
          {page.label && <div className={styles.name}>{page.label}</div>}
        </NavLink>
      ))}
    </nav>
  );
}
