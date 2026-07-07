import clsx from "clsx";
import styles from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLElement> {}

export function Button({ className, ...props }: ButtonProps) {
  return <button className={clsx(styles.Button, className)} {...props} />;
}
