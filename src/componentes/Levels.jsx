/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from "react"
import Level1 from "../assets/images/level1.png"

import styles from "./levels.module.css"


function Levels(props){

    props.stopSoundTrack()
    props.setDispAlt("none")
    props.setAnimeRocket("none")
    
    props.setPaused(false)

    useEffect(()=>{
        props.levelFase == true ? props.somPlay() : ""
    },[props.points])

    let mensagemFinal = () => {
        
        if(props.points == 0){
            return <div className={styles.inp}>
                <p style={{fontSize: "100pt", color: "yellow", WebkitTextStroke: "3px black", WebkitTextStrokeColor: "black"}}>1</p>
                <input type="text" className={styles.input} placeholder="Nome" maxLength={10} onChange={(e)=>{props.setNameUser(e.target.value)}} />


            
                
            </div>            
        }else if(props.points == 20){
            return <p style={{fontSize: "100pt", color: "yellow", WebkitTextStroke: "3px black", WebkitTextStrokeColor: "black"}}>2</p>
        }else if(props.points == 40){
            return <p style={{fontSize: "100pt", color: "yellow", WebkitTextStroke: "3px black", WebkitTextStrokeColor: "black"}}>3</p>
        }else if(props.points == 60){
            return <p style={{fontSize: "100pt", color: "yellow", WebkitTextStroke: "3px black", WebkitTextStrokeColor: "black"}}>4</p>
        }else if(props.points == 80){
            return <p style={{fontSize: "100pt", color: "yellow", WebkitTextStroke: "3px black", WebkitTextStrokeColor: "black"}}>5</p>
        }
       
     }
        
        return <div className={styles.divgo} >
        <img src={Level1} alt="Game Over" className={styles.gameimg} onClick={()=>{
            props.setLevelFase(false)
            props.somStop()
            props.playSoundTrack()
            props.setDispAlt("")
            props.setAnimeRocket("")
            props.titulo()
            props.setNave(true)
            props.points != 0 ? props.setPaused(true) : ""

        }} />
        <div style={{position: "absolute", bottom: "170px"}}>

         {mensagemFinal()}
         <div className={styles.instructions}>
                    {props.level == "L1" ?                     <p>
                        Instruções<br/>
                        3. Escreva o nome<br/>
                        4. Clique em Level<br/>
                        5. Clique em Start
                    </p> : ""}
                    <div className={styles.menu2}>
                        <a onClick={()=>{props.setCartao(true)}}>Autor</a>
                    </div>
                </div>

         
        </div>
        

    </div>
    
}

export default Levels