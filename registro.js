function mostrarMesaje(mensaje){
    alert(mensaje);
}

function incrementarContador(){
    let valor= document.getElementById("contador").value
    /* console.log("el valor obtenido es ", valor);
    if(valor>5){
        alert("El num es > a 5");
    } else if(valor >=0){
        alert("El num es pos");
    } else {
        alert("El num es negativo");
    }


    for(i=0;i<5;i++){
        console.log(i);
        i++;
    }
    */
    valor++;
    document.getElementById("contador").value = valor;
}