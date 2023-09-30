/* eslint-disable react/prop-types */
import { useState } from "react"
import gameOver from "../assets/images/lifes.png"
import styles from "./menosvida.module.css"
import explosao from "../assets/sounds/menosvida.mp3"
import disparo from "../assets/sounds/disparado.mp3"


function MenosVida(props){

    const [disp, setDisp] = useState("")

    const som_disp = () => {
        
        return new Audio(disparo).play()

    }

    const som_explosion1 = () => {
        return new Audio(explosao).play()
    }

    som_explosion1()

    let mensagemFinal = () => {
        if(props.lifes == 1){
            return <p>{props.nameUser}, tome cuidado!<br/>Só falta {props.lifes} vida.</p>
        }else if(props.lifes == 2){
            return <p>{props.nameUser}, acalme-se!<br/>Faltam {props.lifes} vidas.</p>
        }else if(props.lifes == 3){
            return <p>{props.nameUser}, afcalme-se!<br/>Faltam {props.lifes} vidas.</p>
        }else if(props.lifes == 4){
            return <p>{props.nameUser}, acalme-se!<br/>Faltam {props.lifes} vidas.</p>
        }
    }

    return <div className={styles.divgo}  onClick={()=>{
        props.setPaused(true)
        props.setDispAlt("")
        props.setAnim(false)
        props.setMenosV(false)
        if(props.lifes > 0){
            som_disp()
        }
        }}>
        <img src={gameOver} alt="Game Over" className={styles.gameimg} style={{display: disp, cursor: "pointer", lineHeight: "24px"}} onAnimationEnd={()=>{ 
            setDisp()
        }} />
        {mensagemFinal()}
    </div>
    
}

export default MenosVida