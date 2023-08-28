import React from 'react';
import styles from './profileinfobox.module.css';
import profileImage from '../../assets/headerAssets/profileinfoimg.png';
import arrow from '../../assets/headerAssets/arrow.svg'

interface ProfileInfoBoxProps {
  text: string;
}

const ProfileInfoBox: React.FC<ProfileInfoBoxProps> = ({ text }) => {
  return (
    <div className={styles.profileInfoBox}>
      <img src={profileImage} alt="Perfil" className={styles.profileImage} />
      <span className={styles.profileText}>{text}</span>
      <img src={arrow} alt='' className={styles.arrowDown} />
    </div>
  );
};

export default ProfileInfoBox;