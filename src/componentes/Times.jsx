function Times(a){

    let data = new Date

    if(a == "ano"){
        return data.getFullYear()
    }else if(a == "dia"){
        return data.getDay()
    }else if(a == "mes"){
        return data.getMonth()
    }else if(a == "hora"){
        return data.getHours()
    }else if(a == "minuto"){
        return data.getMinutes()
    }else if(a == "segundos"){
        return data.getSeconds()
    }

}

export default Times