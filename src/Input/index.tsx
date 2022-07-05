import { InputHTMLAttributes } from 'react';
import styles from './input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  handleInputChange: () => void;
}

export function Input({ handleInputChange, ...props }: InputProps) {
  return (
    <input
      {...props}
      type="text"
      className={styles.input}
      placeholder="Add a new task"
      onChange={handleInputChange}
    />
  );
}
