/* eslint-disable react/prop-types */
import { useState } from "react"
import gameOver from "../assets/images/gameover.png"
import styles from "./gameover.module.css"
import gameover from "../assets/sounds/perdeu.mp3"

function GameOv(props){

    const [disp, setDisp] = useState("")

    const som_gameover = () => {

        let somGameOver = new Audio(gameover)
        somGameOver.volume = 0.2
        
        return somGameOver.play()
    }

    let mensagemFinal = () => {
        if(props.level == "L1"){
            return <p>{props.nameUser}, você realmente precisa continuar. <br/>Sua velocidade atual é {props.velocity} segundos.</p>
        }else if(props.level == "L2"){
            return <p>{props.nameUser}, continue tentando!<br/>Logo você passará do nível {props.level}. <br/>Sua velocidade atual é {props.velocity} segundos.</p>
        }else if(props.level == "L3"){
            return <p>{props.nameUser}, você está indo bem!<br/>Chegou ao nível {props.level}. <br/>Sua velocidade atual é {props.velocity} segundos.</p>
        }else if(props.level == "L4"){
            return <p>{props.nameUser}, você chegou ao nível {props.level}!<br/>Quase completou o jogo. <br/>Sua velocidade atual é {props.velocity} segundos.</p>
        }else if(props.level == "L5"){
            return <p>{props.nameUser}, você chegou ao nível {props.level}!<br/>Quase completou o jogo. <br/>Sua velocidade atual é {props.velocity} segundos.</p>
        }
    }

    props.setGameOver(true)

    return <div className={styles.divgo} style={{lineHeight: "26px"}} >

        <img src={gameOver} alt="Game Over" className={styles.gameimg} style={{display: disp, marginBottom: "20px"}} onAnimationStart={som_gameover()} onAnimationEnd={()=>{ 
            setDisp()
        }} />

        <p style={{color: "#00b41e"}} >
            {mensagemFinal()}
            Total de cliques: {props.quantClicks}.<br/>

            Cliques úteis: {props.points*2}.<br/>

            <span style={{color: "yellow"}} >Cliques válidos: {parseFloat(((props.points*2)/props.quantClicks)*100).toFixed(2)}%</span>.<br/>

            <span style={{color: "yellow"}} >Mísseis destruídos: {parseFloat((props.points/90)*100).toFixed(2)}%</span>.<br/>

            <span style={{color: "yellow"}} >Aproveitamento Geral: {((Number(parseFloat(((props.points*2)/props.quantClicks)*100).toFixed(2)) + Number(parseFloat(((props.points)/90)*100).toFixed(2)))/2).toFixed(2)}%</span>.
        
        </p>
    </div>
    
}

export default GameOv