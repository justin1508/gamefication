import { useContext } from "react";
import styles from "../styles/components/Profile.module.css";
import { ChallengesContext } from "../contexts/ChallengesContext";

export function Profile(){
    const {level} = useContext(ChallengesContext);
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/diego3g.png" alt="Diegao" />
            <div>
                <strong>Dieguito</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}