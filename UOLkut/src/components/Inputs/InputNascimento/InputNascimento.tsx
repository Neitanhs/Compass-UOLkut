import React from "react";
import Input from "../Input";

interface InputNascimentoProps {
    nascimento: string;
    setNascimento: React.Dispatch<React.SetStateAction<string>>;
    error: string;
    setError: React.Dispatch<React.SetStateAction<string>>;
}

export const InputNascimento: React.FC<InputNascimentoProps> = ({ nascimento, setNascimento, setError }) => {
    return (
        <div>
            <Input
                type="text"
                placeholder="Nascimento"
                value={nascimento}
                onChange={(e) => {
                    setNascimento(e.target.value);
                    setError('');
                }}
            />
            {/* <p>DD/MM/AAAA</p> */}
        </div>
    );
};