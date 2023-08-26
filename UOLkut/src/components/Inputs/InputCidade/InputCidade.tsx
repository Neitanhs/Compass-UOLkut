import React from "react";
import Input from "../Input";

interface InputCidadeProps {
    cidade: string;
    setCidade: React.Dispatch<React.SetStateAction<string>>;
    error: string;
    setError: React.Dispatch<React.SetStateAction<string>>;
}

export const InputCidade: React.FC<InputCidadeProps> = ({ cidade, setCidade, setError }) => {
    return (
        <Input
            type="text"
            placeholder="Cidade"
            value={cidade}
            onChange={(e) => {
                setCidade(e.target.value);
                setError('');
            }}
        />
    );
};
