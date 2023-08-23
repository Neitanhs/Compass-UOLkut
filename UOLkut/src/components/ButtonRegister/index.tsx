import React, { MouseEventHandler } from "react";
import styles from "./styles.module.css"

interface ButtonRegProps {
  Text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  Type?: "button" | "submit" | "reset";
}

const ButtonReg: React.FC<ButtonRegProps> = ({ Text, onClick, Type = "button" }) => {
  return (
    <button
        className={styles.button}
        type={Type}
        onClick={onClick}>        
        {Text}
    </button>
  );
};

export default ButtonReg;