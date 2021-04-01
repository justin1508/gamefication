import { useContext } from "react";
import styles from "../styles/components/CountDown.module.css";
import { CountdownContext } from "../contexts/CountdownContext";

export function Countdown(){

    const { minutes, seconds, hasFinished, isActive, startCountDown, resetCountDown } = useContext(CountdownContext);
    
    const [minuteLeft, minuteRight] = String(minutes).padStart(2,'0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2,'0').split('');

    return(
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            { hasFinished ? (
                <button 
                disabled
                className={styles.countdownButton}
                > 
                    Ciclo encerrado
                </button>
            ) :
            (
                <>
                {   isActive ? (
                    <button onClick={resetCountDown} type="button" className={`${styles.countdownButton} ${styles.countdownButtonActive}`}> 
                    Abandonar ciclo
                    </button>
                    )
                    :
                    (
                    <button onClick={startCountDown} type="button" className={styles.countdownButton}> 
                    Iniciar cliclo
                    </button>
    
                )}
                </>
            )
            }

          
            
        </div>

       
    )
}