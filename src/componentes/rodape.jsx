/* eslint-disable react/prop-types */
import styles from "./rodape.module.css"



function Rodape(props){

    return <footer className={styles.footer} >
    Desenvolvido/Prof. Everson Silva {props.tempo("ano")} - Backgrounds/Adobe Firefly<br/>SoundTrack/Incompetech - Sound Effects/OpenGameArt.Org
</footer>
}

export default Rodape