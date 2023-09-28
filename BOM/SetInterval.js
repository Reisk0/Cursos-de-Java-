//nos permitira ejecutar una funcion cada cierto tiempo hasta que la paremos. 
//ejecutar una cuenta del 1 en delante 
let cuenta = 0;
let id;
const iniciar = () =>{ //aqui creaste la funcion de inicar para crear un boton que nos indique cuando comenzara la cuenta. 
id = setInterval(() => {//recuerda que crear la variable de tipo GLOBAL es importante para poder usar el boton de parar por que es otro bloque de codigo 
    console.log(cuenta); 
    cuenta++; //aqui pedimos que la cuenta se incremente en una unidad cada segundo
},1000);//aqui es donde pondremos cada cuand nos mandara el hola en pantalla. 
};

const parar = () =>{ //recuerda que usaremos la funcion tipo flecha para para el conteo en relacion al boton del documento html y la funcion global que creamos en la parte de arriba
    console.log('la funcion parara')
clearInterval(id);
};
//Felcidades, creaste un contador de segundos. 
