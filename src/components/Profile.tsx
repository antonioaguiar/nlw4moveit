import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';
import styles from '../styles/pages/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);
    return (
        <div className={styles.profileContainer}>
            <img src="http://github.com/antonioaguiar.png" alt="Antonio Aguiar" />
            <div>
                <strong>Antonio Aguiar</strong>
                <p>
                    <img src="icons/level.svg" alt="Nível atual" />
                    Nível {level}
                </p>
            </div>
        </div>
    );

}