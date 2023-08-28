import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importe o useNavigate
import styles from './header.module.css';
import SearchBox from './searchbox';
import ProfileInfoBox from './profileinfobox';
import { auth } from '../../services/firebase';
import { getUserProfile } from '../../services/apiService';

interface HeaderProfileProps {
    name: string   
}
 

const HeaderProfile: React.FC = () => {
    const navigate = useNavigate();
    const [userProfile, setUserProfile] = useState<HeaderProfileProps>({
        name: "",        
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
    

    return (
        <header className={styles.header}>
            <div className={styles.content}>
            <Link to="/" className={styles.headerText} onClick={() => navigate('/')}>
                 UOLkut
            </Link>                
                <nav className={styles.links}>
                    <a href="/" onClick={() => navigate('/')}>Início</a>
                    <a href="/profile" onClick={() => navigate('/profile')}>Perfil</a>
                    <a href="/" onClick={() => navigate('/')}>Comunidades</a>
                    <a href="/" onClick={() => navigate('/')}>Jogos</a>
                </nav>
                <SearchBox />
                <ProfileInfoBox text={userProfile.name} />
            </div>
        </header>
    );
};

export default HeaderProfile;