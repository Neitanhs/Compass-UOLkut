import React from "react";
import styles from "./IconFriends.module.css";
import friend_1 from "../../../assets/profileFriendsCard/friend_1.png";
import friend_2 from "../../../assets/profileFriendsCard/friend_2.png";
import friend_3 from "../../../assets/profileFriendsCard/friend_3.png";
import friend_4 from "../../../assets/profileFriendsCard/friend_4.png";
import friend_5 from "../../../assets/profileFriendsCard/friend_5.png";
import friend_6 from "../../../assets/profileFriendsCard/friend_6.png";
import friend_7 from "../../../assets/profileFriendsCard/friend_7.png";
import friend_8 from "../../../assets/profileFriendsCard/friend_8.png";
import friend_9 from "../../../assets/profileFriendsCard/friend_9.png";

const friendsAndIamges = [
  { friend: "Fernando", image: friend_1 },
  { friend: "Ana", image: friend_2 },
  { friend: "Carlos", image: friend_3 },
  { friend: "Vitor", image: friend_4 },
  { friend: "Matheus", image: friend_5 },
  { friend: "Ramos", image: friend_6 },
  { friend: "Eiji", image: friend_7 },
  { friend: "Julia", image: friend_8 },
  { friend: "Carol", image: friend_9 },
];

const FriendIcon: React.FC = () => {
  return (
    <>
      <div className={styles.Titulo}>
        <p className={styles.Amigos}>Amigos (248)</p>
        <p className={styles.Vertodos}>Ver todos</p>
      </div>
      <div className={styles.Content}>
        {friendsAndIamges.map((item) => (
          <div key={item.friend} className="name">
            <img src={item.image} alt={item.friend} />
            <p>{item.friend}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default FriendIcon;