import React from "react";
import styles from "./IconCommunity.module.css";
import community_1 from "../../../assets/profileComunnitiesCard/community_1.png";
import community_2 from "../../../assets/profileComunnitiesCard/community_2.png";
import community_3 from "../../../assets/profileComunnitiesCard/community_3.png";
import community_4 from "../../../assets/profileComunnitiesCard/community_4.png";
import community_5 from "../../../assets/profileComunnitiesCard/community_5.png";
import community_6 from "../../../assets/profileComunnitiesCard/community_6.png";
import community_7 from "../../../assets/profileComunnitiesCard/community_7.png";
import community_8 from "../../../assets/profileComunnitiesCard/community_8.png";
import community_9 from "../../../assets/profileComunnitiesCard/community_9.png";

const communityAndIamges = [
  { community: "Carro", image: community_1 },
  { community: "Desenhos", image: community_2 },
  { community: "Crazy", image: community_3 },
  { community: "Fofos", image: community_4 },
  { community: "Animes", image: community_5 },
  { community: "Leitura", image: community_6 },
  { community: "Meu ovo", image: community_7 },
  { community: "My books", image: community_8 },
  { community: "Cafeeee", image: community_9 },
];

const Icon: React.FC = () => {
  return (
    <>
      <div className={styles.Titulo}>
        <p className={styles.Comunidades}>Comunidade (42)</p>
        <p className={styles.Vertodos}>Ver todos</p>
      </div>
      <div className={styles.Content}>
        {communityAndIamges.map((item) => (
          <div key={item.community} className="name">
            <img src={item.image} alt={item.community} />
            <p>{item.community}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Icon;