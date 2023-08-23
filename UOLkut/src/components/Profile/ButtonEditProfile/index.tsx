import React, {MouseEventHandler} from 'react';
import styles from "./styles.module.css"

interface ButtonEditProps {
    Text: string;
    Type?: "button";
    onClick: MouseEventHandler<HTMLButtonElement>
}

const ButtonEditProfile: React.FC<ButtonEditProps> = ({Text, Type = "button", onClick}) => {
    return (
        <button
            className={styles.Button}
            type={Type}
            onClick={onClick}>
            {Text}
        </button>
    );
};

export default ButtonEditProfile;