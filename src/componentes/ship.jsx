/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import shipImage from "../assets/images/nav1.png"
import styles from "./ship.module.css"
import fire1Image from "../assets/images/gifire/fire1.gif"
import fire2Image from "../assets/images/gifire/fire2.gif"

function Ship(props){

    useEffect(()=>{props.points >= 90 ? naveCair() : ""})

    const [positNav, setPositNav] = useState(styles.image)


    setTimeout(() => {
        setPositNav(styles.image2)
        props.setBtns(true)
    }, 15000);

    let naveCair = () =>{
        return setTimeout(() => {
            setPositNav(styles.image3)
        }, 500);
    }

    return <div className={positNav}>
        {props.points >= 90 ? <img src={fire2Image} alt="Fogo na nave" className={styles.imgfogo2} /> : ""}        
        <img src={shipImage} alt="Nave do inimigo" className={styles.img} />
        {props.points >= 90 ? <img src={fire1Image} alt="Fogo na nave" className={styles.imgfogo} /> : ""}  
        
    </div>
}

export default Ship