import React, { useState } from "react";
import Input from "../../components/Input";
import ButtonLog from "../../components/ButtonLogin";
import ButtonReg from "../../components/ButtonRegister";
import LogoSVG from "../../assets/svg/logo.svg";// Importe o arquivo SVG aqui
import { useNavigate} from "react-router-dom";
import styles from '../Login/styles.module.css'

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
        <div className={styles.CardImg}>
        <div className={styles.TextoNoCantoInferior}>Conecta-se aos seus amigos e familiares usando recados e mensagens instantâneas</div>
          <img src="" alt="" />             
        </div>
        <div className={styles.Content}>  
        <div className={styles.Logo}>
          {/* Coloque o SVG aqui */}
          <img src={LogoSVG} alt="Logo" />
        </div>
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