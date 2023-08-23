import React from 'react';
import styles from './stylesInfo.module.css';

interface InfoProps {
    Title: string;
    Text: string;
}

const ProfileInfo: React.FC<InfoProps> = ({Title, Text}) => {
    return (
        <p className={styles.Title}>{Title}: <span className={styles.Text}>{Text}</span></p>
    );
};

export default ProfileInfo;