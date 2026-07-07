import clsx from "clsx";
import { useId } from "react";
import styles from "./RadioGroup.module.css";

export type RadioGroupOption = {
  value: string;
  label: string;
};

export interface RadioGroupProps {
  className?: string;
  value: string;
  options: RadioGroupOption[];
  onChange: (option: string) => void;
}

export function RadioGroup({ className, value, options, onChange }: RadioGroupProps) {
  const name = useId();

  return (
    <div className={clsx(styles.RadioGroup, className)}>
      {options.map((option) => (
        <label key={option.value} className={styles.option}>
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={(event) => {
              if (event.currentTarget.checked) {
                onChange(option.value);
              }
            }}
            className={styles.radio}
          />
          <div>{option.label}</div>
        </label>
      ))}
    </div>
  );
}
