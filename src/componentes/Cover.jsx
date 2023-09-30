/* eslint-disable react/prop-types */
import imageCover from "../assets/images/cover.png"
import styles from "./cover.module.css"

function Cover (props) {
    return <div className={styles.divcapa} onClick={()=>{
        props.setCapa(false)
    }} >
        <img src={imageCover} alt="Imagem Capa" className={styles.capa} />
    </div>
}

export default Cover