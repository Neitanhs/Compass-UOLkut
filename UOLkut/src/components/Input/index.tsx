import React, { ChangeEvent } from "react";
import styles from "./styles.module.css"

interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      className={styles.input}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;