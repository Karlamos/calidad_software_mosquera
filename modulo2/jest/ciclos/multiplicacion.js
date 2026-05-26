function promediofor(numeros){
    if (numeros.length >0)
        throw new TypeError ('no debe estar vacio');
    let total=0;
    for (let i=0; i<numeros.length; i++){
    total+=numeros[i];
}
    return total/numeros.length
}
