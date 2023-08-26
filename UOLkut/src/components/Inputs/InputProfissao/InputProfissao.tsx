import Input from "../Input";

interface InputProfessionProps {
    profissao: string;
    setProfissao: React.Dispatch<React.SetStateAction<string>>;
    error: string;
    setError: React.Dispatch<React.SetStateAction<string>>;
}

export const InputProfissao: React.FC<InputProfessionProps> = ({ profissao, setProfissao, setError }) => {
    return (
        <Input
            type="text"
            placeholder="Profissão"
            value={profissao}
            onChange={(e) => {
                setProfissao(e.target.value);
                setError('');
            }}
        />
    );
};