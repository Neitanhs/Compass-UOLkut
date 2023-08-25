import Input from "../../Inputs/Input"
import styles from "./styles.module.css"


interface FormsEPProps {
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    senha: string;
    setSenha: React.Dispatch<React.SetStateAction<string>>;
    error: string;
    setError: React.Dispatch<React.SetStateAction<string>>;
  }


export const FormsEP: React.FC<FormsEPProps> = ({email, setEmail, senha, setSenha, setError}) => {
  return (
    <form className={styles.formsEP}>         
        <Input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => [setEmail(e.target.value), setError("")]}
          />  
          <Input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => [setSenha(e.target.value), setError("")]}
            
          />
          
    </form>  
  )
}
