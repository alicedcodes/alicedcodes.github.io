import clsx from 'clsx';
import { FoldersIcon, HomeIcon, SettingsIcon } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

export function Navbar({ className }: { className?: string }) {
  const pages = [
    {
      href: '/',
      label: 'Home',
      Icon: HomeIcon,
    },
    {
      href: '/projects',
      label: 'Projects',
      Icon: FoldersIcon,
    },
    {
      href: '/settings',
      Icon: SettingsIcon,
    },
  ];

  return (
    <nav className={clsx(styles.navbar, className)}>
      {pages.map((page) => (
        <NavLink key={page.href} to={page.href} className={styles.link}>
          <page.Icon className={styles.icon} />
          {page.label && <div className={styles.name}>{page.label}</div>}
        </NavLink>
      ))}
    </nav>
  );
}
