import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importe o useNavigate
import styles from './header.module.css';
import SearchBox from './searchbox';
import ProfileInfoBox from './profileinfobox';

const HeaderProfile: React.FC = () => {
    const navigate = useNavigate(); // Inicialize o useNavigate

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
                <ProfileInfoBox text="Iuri Silva" />
            </div>
        </header>
    );
};

export default HeaderProfile;