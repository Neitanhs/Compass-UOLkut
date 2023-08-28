import React, { useState } from "react";
import ButtonLog from "../../components/ButtonLogin";
import ButtonReg from "../../components/ButtonRegister";
import { useNavigate} from "react-router-dom";
import styles from '../Login/styles.module.css'
import CardImg from "../../components/Login/CardImg/CardImg";
import { Logo } from "../../components/Login/Logo/Logo";
import Input from "../../components/Inputs/Input";

const RecoverPWDPage: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [error, setError] = useState<string>("");   
  
    const isValidEmail = (email: string): boolean => {
      const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
      return emailRegex.test(email);
    };  
  
    const handleLogin = () => {
      if (!email) {
        setError("Preencha todos os campos");
        return;
     }else if (!isValidEmail(email)) {
      setError("E-mail inválido");
      return;
    }    
      navigate("/NewPWD");
    };  
            
    const handleBackLogin = () => {   
  
      navigate("/");
    };
    
    
    return (
      <div className={styles.Container}>      
       <CardImg/>
        <div className={styles.Content}>  
        <Logo/>
        <label className={styles.Label}>Recupere sua Senha</label>
        <Input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => [setEmail(e.target.value), setError("")]}
          />           
           <label className={styles.LabelError}>{error}</label>
          <ButtonLog Text="Enviar o Código" onClick={handleLogin} />       
            <label className={styles.Strong}>
              <span>Lembrou sua senha?</span>
            </label> 
          <ButtonReg Text="Entrar com as credenciais" onClick={handleBackLogin} />          
        </div>
      </div>
    );
  };
  

export default RecoverPWDPage;   