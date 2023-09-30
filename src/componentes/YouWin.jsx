/* eslint-disable react/prop-types */
import { useState } from "react"
import youWin from "../assets/images/youwin2.png"
import styles from "./youWin.module.css"


function YouWin(props){

    const [disp, setDisp] = useState("")
    
    props.stopSoundTrack()
    props.playSoundWin()
    props.setDispAlt("none")
    props.setAnimeRocket("none")
    props.setYouW(true)
    props.setPaused(false)


    
    let mensagemFinal = () => {
        
        return <div>

            <p>{props.nameUser}, você venceu!</p>
            <p style={{color: "#00b41e"}} >

            Total de cliques: {props.quantClicks}.<br/>

            Cliques úteis: {props.points*2}.<br/>

            <span style={{color: "yellow"}} >Cliques válidos: {Number(parseFloat(((props.points*2)/props.quantClicks)*100).toFixed(2))}%</span>.<br/>

            <span style={{color: "yellow"}} >Mísseis destruídos: {parseFloat(((props.points)/90)*100).toFixed(2)}%</span>.<br/>

            <span style={{color: "yellow"}}>Aproveitamento Geral: {((Number(parseFloat(((props.points*2)/props.quantClicks)*100).toFixed(2))+Number(parseFloat(((props.points)/90)*100).toFixed(2)))/2).toFixed(2)}%</span>.
        
            </p>
            <button type="reset" onClick={()=>{location.reload()}} className={styles.btnreiniciar}>Reiniciar</button>

        </div>
       
    }
        
        return <div className={styles.divgo} style={{display: disp, lineHeight: "24px"}} >
        <img src={youWin} alt="Game Over" className={styles.gameimg} onAnimationEnd={()=>{ 
            setDisp()
        }} />
        {mensagemFinal()}
    </div>
    
}

export default YouWin