import React, { useState } from "react";
import ButtonLog from "../../components/ButtonLogin";
import { useNavigate } from "react-router-dom";
import styles from '../Login/styles.module.css'
import ButtonReg from "../../components/ButtonRegister";
import CardImg from "../../components/Login/CardImg/CardImg";
import { Logo } from "../../components/Login/Logo/Logo";
import Input from "../../components/Inputs/Input";

const RecoverPWDPage: React.FC = () => {
    const navigate = useNavigate();
    const [code, setCode] = useState("");
    const [senha, setSenha] = useState("");   
    const [confirmSenha, setConfirmSenha] = useState("");   
    const [error, setError] = useState<string>("");  
  
      
    const handleLogin = () => {
      if (!code || !senha || !confirmSenha) {
        setError("Preencha todos os campos");
        return;     
    }     
      navigate("/login");
    };  

    const handleBackLogin = () => {
      navigate("/login");
    }
        
    return (
      <div className={styles.Container}>      
        <CardImg/>
        <div className={styles.Content}>       
        <Logo/>
        <label className={styles.Label}>Nova Senha</label>
          <Input
            type="text"
            placeholder="Informe o código"
            value={code}
            onChange={(e) => [setCode(e.target.value), setError("")]}
          />
          <Input
            type="password"
            placeholder="Nova Senha"
            value={senha}
            onChange={(e) => [setSenha(e.target.value), setError("")]}
          /> 
          <Input
            type="password"
            placeholder="Confirme a Senha"
            value={confirmSenha}
            onChange={(e) => [setConfirmSenha(e.target.value), setError("")]}
          />
          <label className={styles.LabelError}>{error}</label>
          <ButtonLog Text="Salvar" onClick={handleLogin} />       
            <label className={styles.Strong}>
              <span>Lembrou sua senha?</span>
            </label> 
          <ButtonReg Text="Entrar com as credenciais" onClick={handleBackLogin} /> 
          
        </div>
      </div>
    );
  };
  

export default RecoverPWDPage;   