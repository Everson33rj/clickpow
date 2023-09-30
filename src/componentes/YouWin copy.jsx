/* eslint-disable react/prop-types */
import { useState } from "react"
import youWin from "../assets/images/youwin2.png"
import styles from "./gameover.module.css"
import audiYouWin from '../assets/sounds/youwin.wav'


function YouWin(props){
    
    const [disp, setDisp] = useState("")
    let AudioW = new Audio(audiYouWin)
    


    let audioPlay = async ()=>{
    
        AudioW.loop = true
        AudioW.volume = 0.2
        await AudioW.play()
        
    }

    console.log("ok")

    
    disp == "" ? audioPlay() : ""
    
    let audioPause = () =>{
        AudioW.pause()
    }
    
    let mensagemFinal = () => {
        if(props.level == "Easy/I"){
            return <p>{props.nameUser}, continue tentando!<br/>Logo você passará do nível {props.level}.</p>
        }else if(props.level == "Easy/II"){
            return <p>{props.nameUser}, continue tentando!<br/>Logo você passará do nível {props.level}.</p>
        }else if(props.level == "Easy/III"){
            return <p>{props.nameUser}, você está indo bem!<br/>Chegou ao nível {props.level}.</p>
        }else if(props.level == "Easy/IV"){
            return <p>{props.nameUser}, você chegou ao nível {props.level}!<br/>Quase completou o jogo. {props.level}</p>
        }
    }
        
        return <div className={styles.divgo} style={{display: disp}} onClick={()=>{
            setDisp("none")
            audioPause()
        }} >
        <img src={youWin} alt="Game Over" className={styles.gameimg} onAnimationEnd={()=>{ 
            setDisp()
        }} />
        {mensagemFinal()}
    </div>
    
}

export default YouWin