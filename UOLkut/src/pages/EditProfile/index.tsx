import React, { useState, useEffect} from "react";
import ProfileCard from "../../components/Profile/ProfileCard";
import style from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { getUserProfile, updateUserProfile } from "../../services/apiService"; // Importe a função de atualização da API
import { FormsEdit } from "../../components/Forms/FormEdit/FormEdit";
import ButtonSave from "../../components/ButtonSave";
import { InputRelationship } from "../../components/Inputs/InputR/InputRelationship";
import { auth } from "../../services/firebase";

interface EditProfileProps {}

const EditProfilePage: React.FC<EditProfileProps> = () => {
  const navigate = useNavigate();
  const currentUser = auth.currentUser;
  
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

  const [userProfile, setUserProfile] = useState<EditProfileProps>({
    name: "",
    profissao: "",
    pais: "",
    cidade: "",
    nascimento: "",
    relationship: "",
    email:"",
    uid:""
  });

  useEffect(() => {
    if (currentUser) {
      const email = currentUser.email;

      getUserProfile(email)
        .then((response) => {
          setUserProfile(response.data[0]);
        })
        .catch((error) => {
          console.error("Error fetching user profile:", error);
        });
    }
  }, []);


  const handleSave = () => {
    if (!currentUser?.uid) {
      console.error("ID de usuário não disponível");
      return;
    }
  
    const updatedProfile = {
      email,
      senha,
      name,
      profissao,
      pais,
      cidade,
      nascimento,
      relationship,
      uid,
    };
  
    updateUserProfile(currentUser.uid, updatedProfile) // Use currentUser.uid as the ID
      .then(() => {
        // Atualização bem-sucedida
        alert("Perfil atualizado com sucesso!");
  
        // Você pode redirecionar o usuário para a página de perfil ou fazer outra ação aqui
      })
      .catch((error) => {
        console.error("Erro ao atualizar perfil:", error);
      });
  };


  
  return (
    <div className={style.Container}>
      <div className={style.ContainerCard}>
        <ProfileCard
          Name="Gabriel Barbosa"
          RelationshipStatus="Solteiro"
          Country="Brasil"
          isEditing={true}
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
        <ButtonSave Text="Salvar" onClick={handleSave} />
      </div>
    </div>
  );
};

export default EditProfilePage;
