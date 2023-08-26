import Input from "../Input";

interface SenhaProps {
    senha: string;
    setSenha: React.Dispatch<React.SetStateAction<string>>;
    error: string;
    setError: React.Dispatch<React.SetStateAction<string>>;
}

export const SenhaInput: React.FC<SenhaProps> = ({ senha, setSenha, setError }) => {
    return (
        <Input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => {
                setSenha(e.target.value);
                setError('');
              }}
        />
    );
};