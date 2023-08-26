import Input from "../Input";

interface ConfirmSenhaProps {
    confirmSenha: string;
    setConfirmSenha: React.Dispatch<React.SetStateAction<string>>;    
    setError: React.Dispatch<React.SetStateAction<string>>;
}

export const ConfirmSenhaInput: React.FC<ConfirmSenhaProps> = ({
    confirmSenha,
    setConfirmSenha,    
    setError
}) => {
    

    return (
        <Input
            type="password"
            placeholder="Repetir Senha"
            value={confirmSenha}
            onChange={(e) => {
                setConfirmSenha(e.target.value);
                setError('');
              }}
            
        />
    );
};