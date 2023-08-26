import React from "react";
import Input from "../Input";

interface InputPaisProps {
    pais: string;
    setPais: React.Dispatch<React.SetStateAction<string>>;
    error: string;
    setError: React.Dispatch<React.SetStateAction<string>>;
}

export const InputPais: React.FC<InputPaisProps> = ({ pais, setPais, setError }) => {
    return (
        <Input
            type="text"
            placeholder="País"
            value={pais}
            onChange={(e) => {
                setPais(e.target.value);
                setError('');
            }}
        />
    );
};
