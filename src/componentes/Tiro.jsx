import { useState } from "react";
import styles from "./tiro.module.css"

function Tiro(){
    
    const [animatPause1, setAnimatePause1] = useState("")
    const [animatPause2, setAnimatePause2] = useState("")
    const [animatPause3, setAnimatePause3] = useState("")
    const [animatPause4, setAnimatePause4] = useState("")
    

    
    // props.points == 0 ? setAnimatePause1("none") : ""
    

    
    
    // setInterval(() => {
    //     animatPause2 == ""? setAnimatePause2("none") : setAnimatePause2("")
    // }, 9000);
    // setInterval(() => {
    //     animatPause3 == ""? setAnimatePause3("none") : setAnimatePause3("")
    // }, 10000);
    // setInterval(() => {
    //     animatPause4 == ""? setAnimatePause4("none") : setAnimatePause4("")
    // }, 2000);
    
    return <div>
        <div style={{animation: animatPause1}} className={styles.tiro1} ></div>
        <div style={{animation: animatPause2}} className={styles.tiro2} ></div>
        <div style={{animation: animatPause3}} className={styles.tiro3} ></div>
        <div style={{animation: animatPause4}} className={styles.tiro4} ></div>
    </div>

}

export default Tiro