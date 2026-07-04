import clsx from 'clsx';
import { Link, type LinkProps } from 'react-router-dom';
import styles from './FancyLink.module.css';

interface FancyLinkProps extends LinkProps {}

export function FancyLink({ className, ...props }: FancyLinkProps) {
  return <Link className={clsx(styles.link, className)} {...props} />;
}
