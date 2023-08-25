import React, { useState } from "react";
import ButtonLog from "../../components/ButtonLogin";
import { useNavigate } from "react-router-dom";
import styles from "../Login/styles.module.css";
import { FormsReg } from "../../components/Forms/FormRegister/FormRegister";
import { FormsEP } from "../../components/Forms/FormEP/FormsEP";
import CardImg from "../../components/Login/CardImg/CardImg";
import { Logo } from "../../components/Login/Logo/Logo";
import { InputName } from "../../components/Inputs/InputName/InputName";
import { InputRelationship } from "../../components/Inputs/InputR/InputRelationship";

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [name, setName] = useState("");
  const [cidade, setCidade] = useState("");
  const [pais, setPais] = useState("");
  const [profissao, setProfissao] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [relationship, setRelationship] = useState("");
  const [error, setError] = useState<string>("");

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleLogin = () => {
    if (
      !email ||
      !senha ||
      !cidade ||
      !pais ||
      !profissao ||
      !name ||
      !nascimento ||
      !relationship
    ) {
      setError("Preencha todos os campos");
      return;
    } else if (!isValidEmail(email)) {
      setError("E-mail inválido");
      return;
    }

    navigate("/login");
  };

  return (
    <div className={styles.Container}>
      <CardImg/>
      <div className={styles.Content}>
      <Logo/>
        <label className={styles.Label}>Cadastre-se o UOLkut</label>
        <FormsEP
        email={email}
        setEmail={setEmail}
        senha={senha}
        setSenha={setSenha}
        error={error}
        setError={setError}
        />       
        <InputName
        name={name}
        setName={setName}
        error={error}
        setError={setError}
        />
        <div className={styles.info}>
          <FormsReg
          name={name}
          setName={setName}
          nascimento={nascimento}
          setNascimento={setNascimento}
          profissao={profissao}
          setProfissao={setProfissao}
          pais={pais}
          setPais={setPais}
          cidade={cidade}
          setCidade={setCidade}
          error={error}
          setError={setError}/>
        </div>
        <div className={styles.inputRealContainer}>
        <InputRelationship
        relationship={relationship}
        setRelationship={setRelationship}
        error={error}
        setError={setError}
        />
        </div>        

        <label className={styles.LabelError}>{error}</label>
        <ButtonLog Text="Criar Conta" onClick={handleLogin} />
      </div>
    </div>
  );
};

export default RegisterPage;
