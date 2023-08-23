import React from 'react';
import styles from './stylesInterest.module.css';

interface InterestsProps {
    Title: string;
    Content: string[];
}

const ProfileInterests: React.FC<InterestsProps> = ({Title, Content}) => {
    if (Title == "Músicas") {
        return (
            <div>
            <p className={styles.Title}>{Title}: 
                <span className={styles.Content}>{Content[0]}</span>
                <span className={styles.Content}>{Content[1]}</span>
                <span className={styles.Content}>{Content[2]}</span>
                <span className={styles.Expand}>Ver todos</span>
            </p>
        </div>
        );
    }
    
    return (
        <div>
        <p className={styles.Title}>{Title}: 
            <span className={styles.Content}>{Content[0]}</span>
            <span className={styles.Content}>{Content[1]}</span>
            <span className={styles.Expand}>Ver todos</span>
        </p>
    </div>
    );
    
};

export default ProfileInterests;