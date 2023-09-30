/* eslint-disable react/prop-types */
import "./Rocket.css"
// import styles from "./rocket1.module.css"
import imgRocket from "../assets/images/rocket11.gif"
import imgRocket2 from "../assets/images/explode.gif"
import explode from "../assets/sounds/explosao.mp3"
import disparo from "../assets/sounds/disparado.mp3"
import { useEffect, useState } from "react"


function Rocket(props){

    const [imagem, setImagem] = useState(imgRocket)
    const [positQueda, setPositQueda] = useState(props.points == 0 ? `${Math.floor(Math.random() * 90)}%` : "")
    const [heightRocket, setHeightRockt] = useState("200px")
    const [velRocket, setVelRocket] = useState("rocket1")    

    useEffect(()=>{
        condi()
    })

    const som_expl = () => {        

        return new Audio(explode).play()

    }

    const som_disp = () => {
        
        return new Audio(disparo).play()

    }
    
    let condi = () => {

        if(props.points >= 0 && props.points <= 19){

            setVelRocket("rocket1")
            props.setVelocity(15)
            props.setLevel("L1")
            setHeightRockt("175px")


        }else if(props.points > 19 && props.points <= 39){

            setVelRocket("rocket2")
            props.setVelocity(10)
            props.setLevel("L2")
            setHeightRockt("160px")

        }else if(props.points > 39 && props.points <= 59){

            setVelRocket("rocket3")
            props.setVelocity(7)
            props.setLevel("L3")
            setHeightRockt("150px")

        }else if(props.points > 59 && props.points <= 79){

            setVelRocket("rocket4")
            props.setVelocity(5)
            props.setLevel("L4")
            setHeightRockt("125px")
            
        }else if(props.points > 79 && props.points <= 89){
            
            setVelRocket("rocket5")
            props.setVelocity(3)
            props.setLevel("L5")
            setHeightRockt("100px")
            
        }

    }
    
    let dest = ()=>{    

        som_expl()
        setImagem(imgRocket2)  
        props.setPoints(props.points+1)
        

            setTimeout(() => {

                props.setDispAlt("none")
                props.setAnimeRocket("none")       

            }, 600)

            setTimeout(() => {

                props.setDispAlt("")
                setImagem(imgRocket)
                props.setAnimeRocket("")
                setPositQueda(`${Math.floor(Math.random() * 90)}%`)
                som_disp()

            }, 630);
    }



    let rocketAnim = () => {    

        if(props.paused != false && props.lifes > 0){

            

            return <div className={velRocket} style={{display: props.dispAlt, animation: props.animRocket, left: positQueda, zIndex: 1}} onAnimationEnd={()=>{

                props.lifes > 1 ? props.setMenosV(true) : ""               
                props.lifes > 0 ? props.setLifes(props.lifes - 1): ""
                props.lifes == 0 ? props.setAnim(true) : ""
                props.setPaused(false)

                }}>
        
            <img src={imagem} alt="rocket" className="rocketimg" style={{height: heightRocket}} onDoubleClick={

                ()=>{
                    props.lifes > 0 ? dest() : props.setAnim(true)
                    props.points == 19 || props.points == 39 || props.points == 59 || props.points == 79 ? props.setLevelFase(true) : ""
                    props.clicksMais()

                }                             
                                
                } />

                           
            </div>
            

        }

    }
    
    
    return rocketAnim()
}

export default Rocket