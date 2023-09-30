/* eslint-disable react/prop-types */
import { useState } from "react"
import life from "../assets/images/lifes.png"
import plus from "../assets/images/plus.png"
import styles from "./lifes.module.css"
import somMaisVida from "../assets/sounds/maisvida.wav"


function Lifes(props){

    const posit = `${Math.floor(Math.random() * 90)}%`
    const [image, setImage] = useState(life)
    const [dispLife, setDistpLife] = useState("")
    const [widthLife, setWidthLife] = useState("50px")

    const som_maisVida = () => {        

        return new Audio(somMaisVida).play()

    }
    

    return <img src={image} alt="Ganhar Vidas" className={styles.lifes} style={{left: posit, display: dispLife, width: widthLife, height: widthLife}} onClick={()=>{

        props.setLifes(props.lifes+1)
        setWidthLife("20px")
        setImage(plus)
        setDistpLife("none")
        som_maisVida()
        

    }} />

}

export default Lifes