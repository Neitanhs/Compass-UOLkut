import React, { useState } from "react";
import Input from "../../components/Input";
import ButtonLog from "../../components/ButtonLogin";
import LogoSVG from "../../assets/svg/logo.svg";// Importe o arquivo SVG aqui

import { useNavigate } from "react-router-dom";
import styles from '../Login/styles.module.css'

const RecoverPWDPage: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [cidade, setCidade] = useState("");
    const [pais, setPais] = useState("");
    const [profissao, setProfissao] = useState("");
    const [nascimento, setNascimento] = useState("");
    const [select, setSelect] = useState("");
    const [cadastroSucesso, setCadastroSucesso] = useState(false);
    const [error, setError] = useState<string>("");   
  
    const isValidEmail = (email: string): boolean => {
      const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
      return emailRegex.test(email);
    };  
  
    const handleLogin = () => {
      if (!email || !senha) {
        setError("Preencha todos os campos");
        return;
     }else if (!isValidEmail(email)) {
      setError("E-mail inválido");
      return;
    }
    setCadastroSucesso(true);  
      navigate("/login");
    };  
        
    return (
      <div className={styles.Container}>      
        <div className={styles.CardImg}>
        <div className={styles.TextoNoCantoInferior}>Conecta-se aos seus amigos e familiares usando recados e mensagens instantâneas</div>
          <img src="" alt="" />             
        </div>
        <div className={styles.Content}>
        {cadastroSucesso && (
        <div className={styles.successMessage}>
            Cadastro realizado com sucesso! Você pode fazer login agora.
        </div>
            )}
        <div className={styles.Logo}>
          {/* Coloque o SVG aqui */}
          <img src={LogoSVG} alt="Logo" />
        </div>
        <label className={styles.Label}>Cadastre-se o UOLkut</label>
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
        <div className={styles.info}>

            <Input
            type="date"
            placeholder="Nascimento"
            value={nascimento}  // Corrigido para nascimento
            onChange={(e) => [setNascimento(e.target.value), setError("")]}
            />

            <Input
            type="text"
            placeholder="Profissão"
            value={profissao}  // Corrigido para profissao
            onChange={(e) => [setProfissao(e.target.value), setError("")]}
            />

            <Input
            type="text"
            placeholder="País"
            value={pais}  // Mantido como email se estiver correto
            onChange={(e) => [setPais(e.target.value), setError("")]}
            />

            <Input
            type="password"
            placeholder="Cidade"
            value={cidade}  // Corrigido para cidade
            onChange={(e) => [setCidade(e.target.value), setError("")]}
            />
        </div> 
        <select
            className={styles.select}
            value={select}
            onChange={(e) => [setSelect(e.target.value), setError("")]}
            >
            <option value="">Selecione uma opção</option>
            <option value="opcao1">Opção 1</option>
            <option value="opcao2">Opção 2</option>
            <option value="opcao3">Opção 3</option>
        </select>   
            
          <label className={styles.LabelError}>{error}</label>
          <ButtonLog Text="Criar Conta" onClick={handleLogin} />
          
        </div>
      </div>
    );
  };
  

export default RecoverPWDPage;   