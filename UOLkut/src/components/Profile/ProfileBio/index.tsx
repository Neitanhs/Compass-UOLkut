import React from 'react';
import styles from "./styles.module.css";
import ProfileRatings from './ProfileRatings';
import ProfileInfo from './ProfileInfo';
import ProfileInterests from './ProfileInterests';

interface ProfileBioProps {
    Name: string;
    Bio: string;
}

const ProfileBio: React.FC<ProfileBioProps> = ({Name, Bio}) => {
    return (
        <div className={styles.Content}>
            <h2>Boa tarde, {Name}</h2>
            <div className={styles.BioContent}>
                <p>{Bio}</p>
            </div>
            <div className={styles.Ratings}>
                <ProfileRatings Title='Fãs' Type='Fan' FanCount={103} />
                <ProfileRatings Title='Confiável' Type='Reliable' />
                <ProfileRatings Title='Legal' Type='Cool' />
                <ProfileRatings Title='Sexy' Type='Sexy' />
            </div>
            <ProfileInfo Title="Relacionamento" Text="Solteiro" />
            <ProfileInfo Title="Aniversário" Text="21 de julho" />
            <ProfileInfo Title="Idade" Text="22" />
            <ProfileInfo Title="Interesses no Orkut" Text="Solteiro" />
            <ProfileInfo Title="Quem sou eu" Text="Programador" />
            <ProfileInfo Title="Filhos" Text="Não" />
            <ProfileInfo Title="Sexo" Text="Masculino" />
            <ProfileInfo Title="Fumo" Text="Não" />
            <ProfileInfo Title="Bebo" Text="Depedende do dia" />
            <ProfileInfo Title="Moro" Text="Guarantã" />
            <ProfileInfo Title="País" Text="Brasil" />
            <ProfileInfo Title="Cidade natal" Text="São Paulo" />
            <ProfileInterests Title="Músicas" Content={["Trap", "Rap", "Indie"]} />
            <ProfileInterests Title="Filmes" Content={["A rede social", "Meu amigo totoro"]} />
        </div>
    );
};

export default ProfileBio;