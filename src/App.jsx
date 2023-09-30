/* eslint-disable react-hooks/exhaustive-deps */
import './App.css'
import Topo from './componentes/Top'
import Corpo from './componentes/corpo'
import Rodape from './componentes/rodape'
import Rocket from './componentes/Rocket'
import GameOv from './componentes/GameOver'
import Times from './componentes/Times'
import MenosVida from './componentes/MenosVida'
import b1 from './assets/images/b1.png'
import b2 from './assets/images/b2.png'
import b3 from './assets/images/b3.png'
import b4 from './assets/images/b4.png'
import b5 from './assets/images/b5.png'
import Fog from './componentes/fog'
import Lifes from './componentes/Lifes'
import YouWin from './componentes/YouWin'
import Levels from './componentes/Levels'
import { useEffect, useState } from 'react'
import Ship from './componentes/ship'
import somExplFim from "./assets/sounds/explosaofinal2.mp3"
import Tiro from './componentes/tiro'
import imgRocket2 from "./assets/images/explode.gif"
import Cover from './componentes/Cover'
import Card from './componentes/card'

// import imgMira from './assets/images/mira.png'

function App() {

  const [missilDest, setMissilDest] = useState(false)
  const [animRocket, setAnimeRocket] = useState("")
  const [points, setPoints] = useState(0)
  const [dispAlt, setDispAlt] = useState("")
  const [level, setLevel] = useState("L1")
  const [velocity, setVelocity] = useState(15)
  const [anim, setAnim] = useState(false)
  const [paused, setPaused] = useState(false)
  const [menosV, setMenosV] = useState(false)
  const [lifes, setLifes] = useState(2)
  const [totalLifes, setTotalLifes] = useState(2)
  const [youW, setYouW] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [quantClicks, setQuantClicks] = useState(0)
  const [levelFase, setLevelFase] = useState(true)
  const [clicksAMais, setClicksAMais] = useState(50)
  const [btns, setBtns] = useState(false)
  const [nameUser, setNameUser] = useState ("Usuário")
  const [cronom, setCronom] = useState (false)
  const [nave, setNave] = useState(false)
  const [capa, setCapa] = useState(true)
  const [cartao, setCartao] = useState(false)

  // const [posX, setPosX] = useState(0)
  // const [posY, setPosY] = useState(0)
  
  
  // document.addEventListener('mousemove', (coo) => {
    
  //   const x = coo.clientX;
  //   const y = coo.clientY;
    
  //   setPosX(x)
  //   setPosY(y)
    
  // });

  let sons = () => {

    if (points == 0 && nave == true) {
      document.querySelector("#radio1").play()
      document.querySelector("#somnave").play()
      document.querySelector("#somnave2").play()
    }
    
  }
  
  useEffect(()=>{
    sons()
  }, [nave])

  let sonsTiro = () => {
    if(points >= 1){
      document.querySelector("#tiros1").play()
      document.querySelector("#tiros2").play()

    }
  }

  let titulo = () => {
    if(nameUser != ""){
      document.querySelector("title").textContent = document.querySelector("title").textContent + " " + nameUser
    } 
  }  
  
  let stopSoundTrack = () => {
    let som = document.querySelector("#soundTrack")
    return som.pause()
  }
  
  let playSoundTrack = () => {
    let som = document.querySelector("#soundTrack")
    return som.play()
  } 
  
  let playSoundWin = () => {
    let soundWind = document.querySelector("#soundWin")
    return soundWind.play()
  }

  let playSoundLevelFase = () => {
    let soundLevelFase = document.querySelector("#levelfase")
    return soundLevelFase.play()
  }

  let stopSoundLevelFase = () => {
    let soundLevelFase = document.querySelector("#levelfase")
    return soundLevelFase.pause()
  }

  let somExplFinal = ()=>{
    let som = new Audio(somExplFim)
    som.volume = 0.4
    som.play()
  }

  let somTiroExtra = ()=>{
    let somTiroExt2 = document.querySelector("#tiros3")
    return somTiroExt2.play()
  }

  useEffect(() =>{
    explosionMissilDown()
  }, [menosV, gameOver])
  

  let explosionMissilDown = ()=>{
    let explosionMiss = document.querySelector("#explosionmissil")
    return menosV == true ? explosionMiss.play() : ""
  }

  useEffect(()=>{
    radioFase()
    sonsTiro()
  },[points])
  
  let radioFase = () => {

    let radio2 = document.querySelector("#radio2")
    let radio3 = document.querySelector("#radio3")
    let radio4 = document.querySelector("#radio4")
    let radio5 = document.querySelector("#radio5")
    let radio6 = document.querySelector("#radio6")

    return points == 20 ? radio2.play() : points == 40 ? radio3.play() : points == 60 ? radio4.play() : points == 80 ? radio5.play() : points == 90 ? radio6.play() : ""
  } 

  points >= 90 ? somExplFinal() : ""

  let levelModulo = <Levels levelFase={levelFase} setLevelFase={setLevelFase} somStop={stopSoundLevelFase} somPlay={playSoundLevelFase} stopSoundTrack={stopSoundTrack} playSoundTrack={playSoundTrack} dispAlt={dispAlt} setDispAlt={setDispAlt} animRocket={animRocket} setAnimeRocket={setAnimeRocket} points={points} setPoints={setPoints} nameUser={nameUser} setNameUser={setNameUser} titulo={titulo} paused={paused} setPaused={setPaused} setNave={setNave} cartao={cartao} setCartao={setCartao} level={level} />
  
  let backGroundI = () => {

    if(level == "L1"){
      return b1
    }else if(level == "L2"){
      return b2
    }else if(level == "L3"){
      return b3
    }else if(level == "L4"){
      return b4
    }else if(level == "L5"){
      return b5
    }

  }

  let levelMod = () => {
    if(levelFase == true && points == 0){
      return levelModulo
    }else if(levelFase == true && points == 20){
      return levelModulo
    }else if(levelFase == true && points == 40){
      return levelModulo
    }else if(levelFase == true && points == 60){
      return levelModulo
    }else if(levelFase == true && points == 80){
      return levelModulo
    }
  }


  points%10 == 0 && points > 1 ? somTiroExtra() : ""

  let explosaoMissil = ()=>{

    return <img src={imgRocket2} alt="Explosão foguete" style={{position: "absolute", width: "700px", bottom: "-100px", left: "0%"}}/>

  }

  return capa == true ? <Cover setCapa={setCapa} /> : ( 
    
    <div className={"back"} style={{width: "100%", height: "100vh", backgroundImage: `url(${backGroundI()})`, transition: "5000ms"}} onClick={
      
      ()=>{

        paused == true && dispAlt == "" && anim == false && menosV == false ? setQuantClicks(quantClicks + 1) : ""
          
      }

      
    } >
      {cartao == true ? <Card cartao={cartao} setCartao={setCartao} /> : ""}

    {/* <img src={imgMira} alt="Mira" style={{position: "absolute", width: "100px"}} /> */}

    {points >= 1 && gameOver == false ? <Tiro points={points} setPoints={setPoints} /> : ""}

      {nave == true ? <Ship points={points} setPoints={setPoints} btns={btns} setBtns={setBtns} /> : ""}

      {levelMod()}

      {menosV != true ? points >= 22 && points < 25 || points >= 42 && points < 45  || points >= 62 && points < 65 ? lifes < totalLifes ? <Lifes animRocket={animRocket} setAnimeRocket={setAnimeRocket} points={points} setPoints={setPoints} dispAlt={dispAlt} setDispAlt={setDispAlt} level={level} setLevel={setLevel} velocity={velocity} setVelocity={setVelocity} anim={anim} setAnim={setAnim} lifes={lifes} setLifes={setLifes} paused={paused} setPaused={setPaused} menosvida={menosV} setMenosV={setMenosV} totalLifes={totalLifes} setTotalLifes={setTotalLifes} setNameUser={setNameUser} /> : "" : "" : ""}

      <Topo missilDest={missilDest} setMissilDest={setMissilDest} animRocket={animRocket} setAnimeRocket={setAnimeRocket} points={points} setPoints={setPoints} dispAlt={dispAlt} setDispAlt={setDispAlt} level={level} setLevel={setLevel}GameOv anim={anim} setAnim={setAnim} lifes={lifes} setLifes={setLifes} paused={paused} setPaused={setPaused} menosvida={menosV} setMenosV={setMenosV} totalLifes={totalLifes} setTotalLifes={setTotalLifes} velocity={velocity} setVelocity={setVelocity} youW={youW} setYouW={setYouW} gameOver={gameOver} setGameOver={setGameOver} quantClicks={quantClicks} setQuantClicks={setQuantClicks} levelFase={levelFase} setLevelFase={setLevelFase} clicksAMais={clicksAMais} setClicksAMais={setClicksAMais} btns={btns} setBtns={setBtns} nameUser={nameUser} setNameUser={setNameUser} cronom={cronom} setCronom={setCronom} />

      {youW == false ? <Rocket animRocket={animRocket} setAnimeRocket={setAnimeRocket} points={points} setPoints={setPoints} dispAlt={dispAlt} setDispAlt={setDispAlt} level={level} setLevel={setLevel} velocity={velocity} setVelocity={setVelocity} anim={anim} setAnim={setAnim} lifes={lifes} setLifes={setLifes} paused={paused} setPaused={setPaused} menosvida={menosV} setMenosV={setMenosV} totalLifes={totalLifes} setTotalLifes={setTotalLifes} quantClicks={quantClicks} setQuantClicks={setQuantClicks} levelFase={levelFase} setLevelFase={setLevelFase} somTiroExtra={somTiroExtra} /> : ""}
      
      {lifes == 0 ? <><GameOv anim={anim} setAnim={setAnim} level={level}  totalLifes={totalLifes} setTotalLifes={setTotalLifes} velocity={velocity} setVelocity={setVelocity} gameOver={gameOver} setGameOver={setGameOver} quantClicks={quantClicks} setQuantClicks={setQuantClicks} points={points} setPoints={setPoints} nameUser={nameUser} setNameUser={setNameUser}  />{explosaoMissil()}</> : ""}
      
      {menosV == true ? <><MenosVida  missilDest={missilDest} setMissilDest={setMissilDest} animRocket={animRocket} setAnimeRocket={setAnimeRocket} points={points} setPoints={setPoints} dispAlt={dispAlt} setDispAlt={setDispAlt} level={level} setLevel={setLevel}GameOv anim={anim} setAnim={setAnim} lifes={lifes} setLifes={setLifes} paused={paused} setPaused={setPaused} menosvida={menosV} setMenosV={setMenosV} totalLifes={totalLifes} setTotalLifes={setTotalLifes} nameUser={nameUser} setNameUser={setNameUser}  />{explosaoMissil()}</> : ""}
      
      {menosV == true || paused == false || youW == true ? <Rodape tempo={Times} /> : ""}

      {points == 90 ? <YouWin animRocket={animRocket} setAnimeRocket={setAnimeRocket} points={points} setPoints={setPoints} dispAlt={dispAlt} setDispAlt={setDispAlt} level={level} setLevel={setLevel} velocity={velocity} setVelocity={setVelocity} anim={anim} setAnim={setAnim} lifes={lifes} setLifes={setLifes} paused={paused} setPaused={setPaused} menosvida={menosV} setMenosV={setMenosV} totalLifes={totalLifes} setTotalLifes={setTotalLifes} stopSoundTrack={stopSoundTrack} playSoundWin={playSoundWin} youW={youW} setYouW={setYouW} quantClicks={quantClicks} setQuantClicks={setQuantClicks} nameUser={nameUser} setNameUser={setNameUser} /> : ""}

      <Corpo />
      <Fog />
    </div>
    
  )
}

export default App