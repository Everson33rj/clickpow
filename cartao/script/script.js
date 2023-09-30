function pont(){
    intervalo = setInterval(() => {

    let data = new Date()
    let milis = data.getMilliseconds()

    let localPont = document.querySelector(".ponteiro")
    
        if(milis <= 499) {            
            return localPont.style = "color: rgb(55,3,69,4,71,0)"
        }else{
            return localPont.style = "color: rgb(0,0,0,0)"
        }

    }, 10);

}

pont()

function data(){
    let data = new Date()
    let anoAtual = data.getFullYear() 
    let localAno = document.querySelector(".ano")

    return localAno.textContent = anoAtual
    
}

data()