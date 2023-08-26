import React from "react";
import styles from "./styles.module.css";
import { InputNascimento } from "../../Inputs/InputNascimento/InputNascimento";
import { InputProfissao } from "../../Inputs/InputProfissao/InputProfissao";
import { InputPais } from "../../Inputs/InputPais/InputPais";
import { InputCidade } from "../../Inputs/InputCidade/InputCidade";

interface FormsRGProps {
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

export const FormsReg: React.FC<FormsRGProps> = ({
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
    <form className={styles.formReg}>
      <InputNascimento
        nascimento={nascimento}
        setNascimento={setNascimento}
        setError={setError}
        error={error}
      />
      <InputProfissao
        profissao={profissao}
        setProfissao={setProfissao}
        setError={setError}
        error={error}
      />
      <InputPais
        pais={pais}
        setPais={setPais}
        setError={setError}
        error={error}
      />
      <InputCidade
        cidade={cidade}
        setCidade={setCidade}
        setError={setError}
        error={error}
      />
    </form>
  );
};
