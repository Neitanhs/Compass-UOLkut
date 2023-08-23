import React from "react";
import ProfileCard from "../../components/Profile/ProfileCard"
import ButtonEditProfile from "../../components/Profile/ButtonEditProfile";
import ProfileBio from "../../components/Profile/ProfileBio";
import style from "./styles.module.css";
import FriendsCard from "../../components/Profile/FriendsCard/FriendsCard";
import CommunitiesCard from "../../components/Profile/CommunityCard/ComunnitiesCard";

interface ProfilePageProps {}

const ProfilePage: React.FC<ProfilePageProps> = () => {
  const HandleEdit = () => {
    console.log("Soon");
  };

  return (
    <div className={style.Container}>
      <div className={style.ContainerCard}>
        <ProfileCard
          Name="Iuri Silva"
          RelationshipStatus="Solteiro"
          Country="Brasil"
        />
        <ButtonEditProfile Text="Editar meu perfil" onClick={HandleEdit} />
      </div>
      <div className={style.ContainerCard}>
        <ProfileBio
          Name="Iuri Silva"
          Bio="Programar sem café é igual poeta sem poesia"
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