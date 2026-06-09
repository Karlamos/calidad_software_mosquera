function estadoTemperatura(temp){
    if(!Number.isInteger(temp)||temp<0) 
        throw new TypeError('temperatura invalida');
    temperatura="Frio"
    if(temp >= 30){
        temperatura="Calor"
    }else if(temp>=15 && temp<30){
        temperatura="Templado"
    }
    return temperatura;
    
}
module.exports={ estadoTemperatura };