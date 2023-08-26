import React from "react";
import styles from "./styles.module.css";
import { InputNascimento } from "../../Inputs/InputNascimento/InputNascimento";
import { InputProfissao } from "../../Inputs/InputProfissao/InputProfissao";
import { InputPais } from "../../Inputs/InputPais/InputPais";
import { InputCidade } from "../../Inputs/InputCidade/InputCidade";
import { InputName } from "../../Inputs/InputName/InputName";
import { SenhaInput } from "../../Inputs/InputSenha/InputSenha";
import { ConfirmSenhaInput } from "../../Inputs/InputConfirmSenha/InputConfirmSenha";

interface FormsRGProps {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>; 
  confirmSenha: string;
  setConfirmSenha: React.Dispatch<React.SetStateAction<string>>;    
  senha: string;
  setSenha: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  nascimento: string;
  setNascimento: React.Dispatch<React.SetStateAction<string>>;
  profissao: string;
  setProfissao: React.Dispatch<React.SetStateAction<string>>;
  pais: string;
  setPais: React.Dispatch<React.SetStateAction<string>>;
  cidade: string;
  setCidade: React.Dispatch<React.SetStateAction<string>>;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
}

export const FormsEdit: React.FC<FormsRGProps> = ({
  name,
  setName,
  senha,
  setSenha,
  confirmSenha,
  setConfirmSenha,
  nascimento,
  setNascimento,
  profissao,
  setProfissao,
  pais,
  setPais,
  cidade,
  setCidade,
  setError,
  error,
}) => {
  return (    
    <form className={styles.formEdit}>
      <InputProfissao
        profissao={profissao}
        setProfissao={setProfissao}
        setError={setError}
        error={error}
      />
      <InputName
        name={name}
        setName={setName}
        setError={setError}
        error={error}/>
        <InputCidade
          cidade={cidade}
          setCidade={setCidade}
          setError={setError}
          error={error}
        />
        <InputPais
          pais={pais}
          setPais={setPais}
          setError={setError}
          error={error}
        />
      <InputNascimento
        nascimento={nascimento}
        setNascimento={setNascimento}
        setError={setError}
        error={error}
      />
      <SenhaInput
        senha={senha}
        setSenha={setSenha}
        setError={setError}
        error={error}
      
      />
      <ConfirmSenhaInput
      confirmSenha={confirmSenha}
      setConfirmSenha={setConfirmSenha}
      setError={setError}      
      />
      
    </form>
    
  );
};
