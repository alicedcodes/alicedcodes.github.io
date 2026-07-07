import clsx from "clsx";
import type { AnchorHTMLAttributes } from "react";
import styles from "./FancyLink.module.css";

interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export function ExternalLink({ className, ...props }: ExternalLinkProps) {
  return <a className={clsx(styles.link, className)} {...props} />;
}
