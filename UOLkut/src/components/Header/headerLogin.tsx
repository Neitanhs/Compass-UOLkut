import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importe o useNavigate
import styles from './header.module.css';

const HeaderLogin: React.FC = () => {
    const navigate = useNavigate(); // Inicialize o useNavigate

    return (
        <header className={styles.header}>
            <div className={styles.contentLogin}>
                 <Link to="/" className={styles.headerText} onClick={() => navigate('/')}>
                 UOLkut
                </Link>
                <nav className={styles.links}>
                    <a href="/" onClick={() => navigate('/')}>Centro de Segurança</a>
                </nav>
            </div>
        </header>
    );
};

export default HeaderLogin;