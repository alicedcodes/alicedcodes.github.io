import clsx from "clsx";
import styles from "./Note.module.css";

interface NoteProps extends React.HTMLAttributes<HTMLElement> {}

export function Note({ className, ...props }: NoteProps) {
  return <span className={clsx(styles.Note, className)} {...props} />;
}
