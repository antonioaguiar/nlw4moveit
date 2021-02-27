import styles from '../styles/components/Countdown.module.css';
import { CountdownContext } from '../context/CountdownContext';
import { useContext } from 'react';

export function Countdown() {
    const { minutes, seconds, hasFinished, isActive, resetCountDown, startCountDown } = useContext(CountdownContext);

    const [minutesLeft, minutesRight] = String(minutes).padStart(2, '0').split('');
    const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('');

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minutesLeft}</span>
                    <span>{minutesRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondsLeft}</span>
                    <span>{secondsRight}</span>
                </div>
            </div>

            {hasFinished ? (
                <button type="button" disabled
                    className={styles.countdownButton}
                >
                    Ciclo encerrado
                </button>
            ) : (
                //-- fragment    
                <>
                    {isActive ? (<button type="button"
                        className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                        onClick={resetCountDown}>
                        Abandonar Ciclo
                    </button>) : (
                        <button type="button" className={styles.countdownButton}
                            onClick={startCountDown}>
                            Iniciar um ciclo
                        </button>
                    )}
                </>

            )}

        </div>
    );
}