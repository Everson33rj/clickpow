/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import styles from "./top.module.css"
import Logo from "../assets/images/logo2.png"
import LifesImg from "../assets/images/lifes0.png"
import Velocity from "../assets/images/velocity2.png"
import disparo from "../assets/sounds/disparado.mp3"
import seta from "../assets/images/seta1.png"
import missl from "../assets/images/missl.png"
import { useEffect, useState } from "react"

function Topo(props){    

    const [media, setMedia] = useState(0)
    const [sec, setSec] = useState(0)
    const [min, setMin] = useState(0)
    // const [rec1, setRec1] = useState(5)
    // const [rec2, setRec2] = useState(0)
    let valorMedia = props.clicksAMais-media

    const som_disp = () => {
        
        return new Audio(disparo).play()
        
    }

    useEffect(()=>{
        setMedia(props.quantClicks - (props.points*2))
    },[props.points])

    useEffect(()=>{

        if(valorMedia < 1){
            
            props.setLifes(0)
            props.setDispAlt("none")
            props.setAnim(false)

        }        
        
    })    

    let tiempo = () => {

        let tempo2 = setInterval(() => {
            
            setSec(sec => sec+1)            
            
        }, 1000)
        
        return () => clearInterval(tempo2) 
        
    }
    
    sec == 60 ? setSec(0) : ""
    sec == 60 ? setMin(min => min + 1) : ""
    
    useEffect(()=>{
        
        if(props.paused == true){
            return tiempo()
        }
        
    },[props.paused])
    
    // let tiempoR = () => {
        
    //     let tempo3 = setInterval(() => {
            
    //         setRec2(rec2 => rec1 != 0 ? rec2 - 1 : 0) 
            
            
    //     }, 1000)

    //     rec2 == 0 ? setRec1(rec1 => rec1 - 1) : 0       
        
    //     return () => clearInterval(tempo3) 
        
    // }
    
    // rec2 < 0 ? setRec2(60) : ""

    // useEffect(()=>{
    //     if(props.paused == false){
    //         if(rec2 > -1){
    //             return tiempoR()
    //         }
    //     }
    // },[props.paused])

    

    let tempo = () => {
        return <>{min < 10 ? 0 : ""}{min}:{sec < 10 ? 0 : ""}{sec}</>
    }

    // let tempoRec = () => {
    //     return <>0{rec1}:{rec2 < 10 ? 0 : ""}{rec2}</>
    // }

    return <header className={styles.header}>
        <div className={styles.logomenu}>
            <a href="#" className={styles.logo}><img src={Logo} alt="ClickPow" /></a>
            <div className={styles.nomeuser}>{props.nameUser}</div>
            <div className={styles.level} title="Fase atual">{props.level}</div>
            <div className={styles.clicks} title="Contagem de clicks"><img src={seta} alt="Clicks" style={{height: "20px"}}/> {props.quantClicks}</div>
            <div className={styles.clicks} title="Clicks de crédito" style={{color: valorMedia < 10 ? "red" : "#33a936"}}><img src={seta} alt="Clicks de crédito" style={{height: "20px"}}/>+ {valorMedia}</div>
            <div className={styles.points}title="Mísseis destruidos"><img src={missl} alt="Mísseis explodidos" style={{width: "20px"}} title="Mísseis explodidos" /> {props.points}</div>
            <div className={styles.life}><img src={LifesImg} alt="Lifes Image" style={{width: "20px"}} title="Vidas"/> {props.lifes}</div>
            <div className={styles.velocity}><img src={Velocity} alt="Lifes Image" style={{width: "20px"}} title="Velocidade do míssel" /> {props.velocity}s</div>
            {props.btns == true ? <div className={styles.menu}>
                
                <a onClick={()=>{

                    location.reload()
                    
                }}>Reset</a>
                {props.youW == false && props.gameOver == false ? <a onClick={()=>{
                props.setPaused(true)
                props.setDispAlt("")
                props.setAnim(false)
                props.setMenosV(false)
                if(props.lifes > 0){
                    som_disp()
                }
                
                }}>Start</a> : ""}

            </div>: ""}
            <div className={styles.tempodejogo}>
            {/* <div className={styles.tempodejogo2}>{tempoRec()}</div> */}
            <div className={styles.tempodejogo1}>{tempo()}</div>
            </div>
        </div>
    </header>
}

export default Topo