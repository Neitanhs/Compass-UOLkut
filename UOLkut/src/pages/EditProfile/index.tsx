import React, { useState } from "react";
import ProfileCard from "../../components/Profile/ProfileCard";
import style from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { FormsEdit } from "../../components/Forms/FormEdit/FormEdit";
import ButtonSave from "../../components/ButtonSave";
import { InputRelationship } from "../../components/Inputs/InputR/InputRelationship";

interface ProfilePageProps {}

const ProfilePage: React.FC<ProfilePageProps> = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmSenha, setConfirmSenha] = useState("");
    const [name, setName] = useState("");
    const [profissao, setProfissao] = useState("");
    const [pais, setPais] = useState("");
    const [cidade, setCidade] = useState("");
    const [nascimento, setNascimento] = useState("");
    const [relationship, setRelationship] = useState("");
    const [error, setError] = useState("");
  const handleEdit = () => {
    navigate("/EditProfile");
  };

  return (
    <div className={style.Container}>
      <div className={style.ContainerCard}>
        <ProfileCard
          Name="Gabriel Barbosa"
          RelationshipStatus="Solteiro"
          Country="Brasil"
        />
      </div>
      <div className={style.formsContainer}>
        <div className={style.titleContainer}>
          <span>Editar Informações</span>
        </div>
        <div>
          <FormsEdit 
          email={email}
          setEmail={setEmail}          
          confirmSenha={confirmSenha}
          setConfirmSenha={setConfirmSenha}
          senha={senha}
          setSenha={setSenha}
          name={name}
          setName={setName}
          profissao={profissao}
          setProfissao={setProfissao}
          pais={pais}
          setPais={setPais}
          cidade={cidade}
          setCidade={setCidade}
          nascimento={nascimento}
          setNascimento={setNascimento}
          error={error}
          setError={setError}/>

        <div className={style.relationship}>

          <InputRelationship
          relationship={relationship}
          setRelationship={setRelationship}
          error={error}
          setError={setError}/>
          
        </div>
        </div>
        <ButtonSave Text="Criar uma conta" onClick={handleEdit} />
      </div>
    </div>
  );
};

export default ProfilePage;
