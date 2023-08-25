import React from 'react';
import Input from '../../Inputs/Input';
import styles from "./styles.module.css"


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

export const FormsReg: React.FC<FormsRGProps> = ({ nascimento, setNascimento, profissao, setProfissao, pais, setPais, cidade, setCidade, setError }) => {
    return (
        
    <form className={styles.formReg}>        
      <Input
        type="text"
        placeholder="Nascimento"
        value={nascimento}
        onChange={(e) => {
          setNascimento(e.target.value);
          setError(''); 
        }}
      />
      <Input
        type="text"
        placeholder="Profissão"
        value={profissao}
        onChange={(e) => {
          setProfissao(e.target.value);
          setError(''); 
        }}
      />
      <Input
        type="text"
        placeholder="País"
        value={pais}
        onChange={(e) => {
          setPais(e.target.value);
          setError(''); 
        }}
      />
      <Input
        type="text"
        placeholder="Cidade"
        value={cidade}
        onChange={(e) => {
          setCidade(e.target.value);
          setError(''); 
        }}
      />     
    </form>    
  );
};