import React from 'react';
import styles from './styles.module.css';
import Star from "../../../assets/icons/Star.svg";
import Smiley from "../../../assets/icons/Smiley.svg";
import Like from "../../../assets/icons/ThumbsUp.svg";
import Heart from "../../../assets/icons/Heart.svg";

interface RatingsProps {
    Title: string;
    Type: "Fan" | "Reliable" | "Cool" | "Sexy";
    FanCount?: number;
}

const ProfileRatings: React.FC<RatingsProps> = ({Title, Type, FanCount}) => {
    if (Type === "Fan") {
        return (
            <div className={styles.Fans}>
                <p>{Title}</p>
                <img src={Star} alt="star icon"/>
                <p className={styles.FanCount}>{FanCount}</p>
            </div>
        );
    }

    if (Type === "Reliable") {
        return (
            <div className={styles.RatingsGeneric}>
                <p>Confiável</p>
                <img src={Smiley} alt="smiley icon"/>
                <img src={Smiley} alt="smiley icon"/>
            </div>
        );
    }

    if (Type === "Cool") {
        return (

            <div className={styles.RatingsGeneric}>
            <p>Legal</p>
            <img src={Like} alt="thumbsup icon"/>
            <img src={Like} alt="thumbsup icon"/>
            <img src={Like} alt="thumbsup icon"/>
        </div>
        );
    }

    return (
        <div className={styles.RatingsGeneric}>
            <p>Sexy</p>
            <img src={Heart} alt="heart icon"/>
            <img src={Heart} alt="heart icon"/>
        </div>
    );
};

export default ProfileRatings;