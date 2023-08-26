import React, { MouseEventHandler } from "react";
import styles from "./styles.module.css";


interface ButtonSaveProps {
  Text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  Type?: "button" | "submit" | "reset";
}

const ButtonSave: React.FC<ButtonSaveProps> = ({ Text, onClick, Type = "button" }) => {
  return (
    <div className={styles.buttonContainer}>
    <button
        className={styles.button}
        type={Type}
        onClick={onClick}>
        {Text}  
    </button>
    </div>
  );
};

export default ButtonSave;