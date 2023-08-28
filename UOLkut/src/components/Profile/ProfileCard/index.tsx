import React from 'react';
import styles from "./styles.module.css"
import PFPBorder from "../../../assets/profileCard/Borda.svg"
import ProfilePicture from "../../../assets/profileCard/profileinfoimg.png"
import Pencil from "../../../assets/profileCard/pencil.svg"

interface ProfileProps {
  Name: string;
  RelationshipStatus: string;
  Country: string;
  isEditing?: boolean; 

}

const ProfileCard: React.FC<ProfileProps> = ({Name, RelationshipStatus, Country, isEditing}) => {
  return (
    <div className={styles.Content}>
      <div className={styles.PFP}> 
      <div className={styles.ProfileImageContainer}>       
        <img src={Pencil} className={styles.Icon} alt="Edit"/>
        <img className={styles.PFPImg} src={ProfilePicture} alt="profile" />
        <img src={PFPBorder} alt="profile border" />
        </div>
      </div>
      {!isEditing && ( // Renderiza apenas se não estiver na página de edição
        <>
          <p className={styles.ProfileName}>{Name}</p>
          <p className={styles.ProfileDescription}>{RelationshipStatus}, {Country}</p>
        </>
      )}
    </div>
  );
};

export default ProfileCard;