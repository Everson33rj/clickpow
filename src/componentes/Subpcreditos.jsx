/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unknown-property */
import styles from "./card.module.css"
import fotoAutor from "../assets/images/autor.png"
import { useEffect, useState } from "react";

function SubCreditos(props) {

    const [barra, setBarra] = useState("#8db1b5")

    function pont(){

        setInterval(() => {
    
        let data = new Date()
        let sec = data.getMilliseconds()
        
            if(sec <= 599) {            
                return setBarra("#8db1b5")
            }else{
                return setBarra("rgb(0,0,0,0)")
            }
    
        }, 100);
    
    }
    
    useEffect(()=>{
        return pont()
    })
    

    return <div className={styles.body}>

        <button type="button" className={styles.btncard} onClick={()=>{props.setCartao(false)}}>Voltar</button>

        <div className={styles.body2}>
            <div>
                <div className={styles.logomenu}>
                    
                    <div className={styles.logo}>
                        <a href="#">everson_silva/home</a><span className={styles.ponteiro} style={{color: barra}}>|</span>
                    </div>

                </div>
            </div>

            <div className={styles.main}>

                <div className={styles.conteudo}>
                    
                    <img className={styles.imagem1} src={fotoAutor} alt="Autor" />
                    <p className={styles.nome}>Everson Silva</p>

                    <p className={styles.subtitulo}>Professor de informática administrativa, desenvolvedor, programador, design gráfico e estudante de engenharia de software.</p>
                    
                    <div className={styles.contatos}>
                    <a href="#" target="_blank" rel="noopener" title="Twitter"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a>
                        <a href="mailto:contato@juliarizza.com" target="_blank" rel="noopener" title="Email"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></a>
                        <a href="https://github.com/juliarizza" target="_blank" rel="noopener" title="Github"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" ><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
                        <a href="https://www.linkedin.com/in/juliarizza" target="_blank" rel="noopener" title="Linkedin"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
                    </div>
                </div>


            </div>

        </div>

    
</div>

}

export default SubCreditos