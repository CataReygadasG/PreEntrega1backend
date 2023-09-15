const cantidadNumeros = 100000;
const numerosAleatorios = Array.from({ length: cantidadNumeros}, ()=>{
    return Math.floor((Math.random()*20) + 1)
});
const frecuencia ={};
numerosAleatorios.forEach((numero)=>{
    if(frecuencia[numero]){
        frecuencia[numero]++;
    }else{
        frecuencia[numero] = 1
    }
});
console.log(frecuencia)