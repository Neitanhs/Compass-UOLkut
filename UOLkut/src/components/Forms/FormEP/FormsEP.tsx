import { EmailInput } from "../../Inputs/InputEmail/InputEmail";
import { SenhaInput } from "../../Inputs/InputSenha/InputSenha";
import styles from "./styles.module.css";

interface FormsEPProps {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  senha: string;
  setSenha: React.Dispatch<React.SetStateAction<string>>;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
}

export const FormsEP: React.FC<FormsEPProps> = ({
  email,
  setEmail,
  senha,
  setSenha,
  setError,
  error,
}) => {
  return (
    <form className={styles.formsEP}>
      <EmailInput
        email={email}
        setEmail={setEmail}
        setError={setError}
        error={error}
      />
      <SenhaInput
        senha={senha}
        setSenha={setSenha}
        setError={setError}
        error={error}
      />
    </form>
  );
};
