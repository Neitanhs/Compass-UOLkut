import { Link } from 'react-router-dom';
import React, { useState } from "react";
import ButtonLog from "../../components/ButtonLogin";
import ButtonReg from "../../components/ButtonRegister";
import CardImg from '../../components/Login/CardImg/CardImg';
import { useNavigate } from "react-router-dom";
import styles from './styles.module.css'
import { Logo } from '../../components/Login/Logo/Logo';
import { FormsEP } from '../../components/Forms/FormEP/FormsEP';

const LoginPage: React.FC = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
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
  
      navigate("/profile");
    };
  
    const handleRegister = () => {   
  
      navigate("/register");
    };
    
    return (
      <div className={styles.Container}>      
        <CardImg/>
        <div className={styles.Content}>
        <Logo/>
        <label className={styles.Label}>Acesse o Orkut</label>
        <div>
          <FormsEP
          email={email}
          setEmail={setEmail}
          senha={senha}
          setSenha={setSenha}
          error={error}
          setError={setError}
          />
          </div>
          <div className={styles.RememberPassword}>
            <input            
              type="checkbox" 
            />
            <label>Lembrar da senha</label>
          </div>
          <label className={styles.LabelError}>{error}</label>
          <ButtonLog Text="Entrar" onClick={handleLogin} />       
          <ButtonReg Text="Criar uma conta" onClick={handleRegister} /> 
            <label >
              <Link className={styles.Link} to="/Recover">Esqueci minha Senha</Link>
            </label>        
        </div>
      </div>
    );
  };
  

export default LoginPage;   