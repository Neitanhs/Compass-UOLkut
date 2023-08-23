import React, { MouseEventHandler } from "react";
import styles from "./styles.module.css";


interface ButtonLogProps {
  Text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  Type?: "button" | "submit" | "reset";
}

const ButtonLog: React.FC<ButtonLogProps> = ({ Text, onClick, Type = "button" }) => {
  return (
    <button
        className={styles.button}
        type={Type}
        onClick={onClick}>
        {Text}  
    </button>
  );
};

export default ButtonLog;