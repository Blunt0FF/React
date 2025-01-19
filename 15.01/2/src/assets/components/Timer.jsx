import {useState} from 'react';
import Styles from '../styles/Timer.module.css'
import { useEffect } from 'react';

export default function Timer () {
    const [seconds, setSeconds] = useState(0);
    const [status, setStatus] = useState(false)

    useEffect( () => {
        let interval
        if(status){
            interval = setInterval(()=>{
                setSeconds(seconds => seconds+1)
            }, 1000)
        }
        else if(!status && seconds !== 0) {
            clearInterval(interval)
        }
        return(
            ()=>{
                clearInterval(interval)
            }
        )
    }, [seconds, status])

    function handleReset(){
        setStatus(false)
        setSeconds(0)
    }
    return(
        <>
        <div className={Styles.timerDiv}>
            <h1 className={Styles.timerTitle}>{seconds}</h1>
            <button className={Styles.timerButton} onClick={()=>setStatus(true)}>Start</button>
            <button className={Styles.timerButton} onClick={()=>setStatus(false)}>Stop</button>
            <button className={Styles.timerButton} onClick={handleReset}>Reset</button>
        </div>
        </>
    )
}