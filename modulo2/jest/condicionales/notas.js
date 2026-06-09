function notas(nota){
    if(!Number.isInteger(nota)||nota<0||nota>0) 
        throw new TypeError('nota invalida');
    estado="Reprobado"
    if(nota > 7){
        estado="Aprobado"
    }else if(nota>=4){
        estado="Supletorio"
    }
    return estado;
    
}
module.exports={ notas };