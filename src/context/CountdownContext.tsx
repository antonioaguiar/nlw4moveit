import { useContext, createContext, useState, ReactNode, useEffect } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';

interface CountdownContextData {
    minutes: number;
    seconds: number;
    hasFinished: boolean;
    isActive: boolean;
    startCountDown: () => void;
    resetCountDown: () => void;
}

interface CountdownProviderProps {
    children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData);

let timeOut = 0.1 * 60;
let countDownTimeOut: NodeJS.Timeout;

export function CountdownProvider({ children }: CountdownProviderProps) {

    const { startNewChallenge } = useContext(ChallengesContext);
    const [time, setTime] = useState(timeOut);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;


    function startCountDown() {
        setIsActive(true);
    }

    function resetCountDown() {
        //js puro
        clearTimeout(countDownTimeOut);
        setIsActive(false);
        setHasFinished(false);
        setTime(timeOut);
    }

    //useEffect == efeitos colaterais.. quando algo acontecer faça
    //o que eu quero executar, quando eu quero
    useEffect(() => {
        if (isActive && time > 0) {
            countDownTimeOut = setTimeout(() => {
                setTime(time - 1);
            }, 1000);
        } else if (isActive == true && time == 0) {

            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time]);

    return (
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            isActive,
            startCountDown,
            resetCountDown
        }}>
            {children}
        </CountdownContext.Provider>
    )
}

