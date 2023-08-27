import React, { useEffect, useState } from "react";
import ProfileCard from "../../components/Profile/ProfileCard";
import ButtonEditProfile from "../../components/Profile/ButtonEditProfile";
import ProfileBio from "../../components/Profile/ProfileBio";
import style from "./styles.module.css";
import FriendsCard from "../../components/Profile/FriendsCard/FriendsCard";
import CommunitiesCard from "../../components/Profile/CommunityCard/ComunnitiesCard";
import { useNavigate } from "react-router-dom";
import { getUserProfile } from "../../services/apiService";
import { auth } from "../../services/firebase";

interface ProfilePageProps {
  name: string;
  profissao: string;
  pais: string;
  cidade: string;
  nascimento: string;
  relationship: string;
  uid: string;
}

const ProfilePage: React.FC<ProfilePageProps> = () => {
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState<ProfilePageProps>({
    name: "",
    profissao: "",
    pais: "",
    cidade: "",
    nascimento: "",
    relationship: "",
    uid: "",
  });

  useEffect(() => {
    const currentUser = auth.currentUser;

    if (currentUser) {
      const uid = currentUser.uid;

      getUserProfile(uid)
        .then((response) => {
          setUserProfile(response.data[0]);

          console.log("User Profile:", userProfile); // Adicione esta linha
        })
        .catch((error) => {
          console.error("Olha o erro aí filho:", error);
        });
    }
  }, []);

  const HandleEdit = () => {
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
        <ButtonEditProfile Text="Editar meu perfil" onClick={HandleEdit} />
      </div>
      <div className={style.ContainerCard}>
        <ProfileBio
          Bio="Deus, me Ajuda"
          name={userProfile.name}
          relationship={userProfile.relationship}
          nascimento={userProfile.nascimento}
          profissao={userProfile.profissao}
          pais={userProfile.pais}
          cidade={userProfile.cidade}
        />
      </div>
      <div className={style.ContainerFriendsANDCommunities}>
        <div className={style.ContainerFriends}>
          <FriendsCard />
        </div>
        <div className={style.ContainerCommunities}>
          <CommunitiesCard />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
