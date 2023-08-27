import React from 'react';
import styles from "./styles.module.css";
import ProfileRatings from './ProfileRatings';
import ProfileInfo from './ProfileInfo';
import ProfileInterests from './ProfileInterests';

interface ProfileBioProps {    
    Bio: string;
    name: string,    
    profissao:string, 
    pais:string,
    cidade:string,
    nascimento:string,
    relationship:string,
    
}

const ProfileBio: React.FC<ProfileBioProps> = ({Bio, name, profissao, pais, cidade, nascimento, relationship}) => {
    
   

    return (
        <div className={styles.Content}>
            <h2>Boa tarde, {name}</h2>
            <div className={styles.BioContent}>
                <p>{Bio}</p>
            </div>
            <div className={styles.Ratings}>
                <ProfileRatings Title='Fãs' Type='Fan' FanCount={103} />
                <ProfileRatings Title='Confiável' Type='Reliable' />
                <ProfileRatings Title='Legal' Type='Cool' />
                <ProfileRatings Title='Sexy' Type='Sexy' />
            </div>
            <ProfileInfo Title="Relacionamento" value={relationship} />
            <ProfileInfo Title="Aniversário" value={nascimento} />
            <ProfileInfo Title="Idade" value="999+" />            
            <ProfileInfo Title="Quem sou eu" value={profissao} />                      
            <ProfileInfo Title="Moro" value="Paulista" />
            <ProfileInfo Title="País" value={pais} />
            <ProfileInfo Title="Cidade natal" value={cidade} />
            <div className={styles.profileInt}>
            <ProfileInterests Title="Músicas" Content={["Trap", "Rap", "Indie"]} />
            <ProfileInterests Title="Filmes" Content={["A rede social", "Meu amigo totoro"]} />
            </div>
        </div>
    );
};

export default ProfileBio;