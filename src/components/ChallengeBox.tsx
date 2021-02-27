import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';
import { CountdownContext } from '../context/CountdownContext';
import style from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);

    const { resetCountDown } = useContext(CountdownContext);

    function handleChallengeSucceeded() {
        completeChallenge();
        resetCountDown();
    }

    function handleChallengeFailed() {
        resetChallenge();
        resetCountDown();
    }

    return (
        <div className={style.challengeBoxContainer}>

            { activeChallenge ? (
                <div className={style.challengeActive}>

                    <header>
                        Ganhe {activeChallenge.amount} xp
                    </header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt="" />
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button type='button'
                            className={style.challengeFailedButton}
                            onClick={handleChallengeFailed}
                        >Falhei</button>
                        <button type='button'
                            className={style.challengeSucceededButton}
                            onClick={handleChallengeSucceeded}
                        >Completei</button>
                    </footer>

                </div>
            ) : (<div className={style.challengeNotActive}>
                <strong>Finalize um ciclo para receber um desafio</strong>
                <p>
                    <img src={`icons/level-up.svg`} />
                    Avance de nível completando o desafio
                </p>
            </div>)}

        </div>
    )
}