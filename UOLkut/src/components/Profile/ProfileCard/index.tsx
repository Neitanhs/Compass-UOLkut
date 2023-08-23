import React from 'react';
import styles from "./styles.module.css"
import PFPBorder from "../../../assets/profileCard/Borda.svg"
import ProfilePicture from "../../../assets/profileCard/profileinfoimg.png"

interface ProfileProps {
  Name: string;
  RelationshipStatus: string;
  Country: string;
}

const ProfileCard: React.FC<ProfileProps> = ({Name, RelationshipStatus, Country}) => {
  return (
    <div className={styles.Content}>
      <div className={styles.PFP}>
        <img className={styles.PFPImg} src={ProfilePicture} alt="profile" />
        <img src={PFPBorder} alt="profile border" />
      </div>
      <p className={styles.ProfileName}>{Name}</p>
      <p className={styles.ProfileDescription}>{RelationshipStatus}, {Country}</p>
    </div>
  );
};

export default ProfileCard;