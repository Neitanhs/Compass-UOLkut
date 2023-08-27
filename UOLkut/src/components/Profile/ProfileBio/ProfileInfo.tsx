import React from 'react';
import styles from './stylesInfo.module.css';

interface InfoProps {
    Title: string;
    value: string;
}

const ProfileInfo: React.FC<InfoProps> = ({Title, value}) => {
  
    return (
        <p className={styles.Title}>{Title}: <span className={styles.Text}>{value}</span></p>
    );
};

export default ProfileInfo;