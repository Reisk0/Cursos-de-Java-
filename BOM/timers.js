//funcion que el navegador me va a devolver 
//window.setTimeOut()
//Nos permitira ejecutar una funcion despues de cierto tiempo 


//aqui es donde pondras los segundos para que se ejecute la funcion. 
const saludo = () => {
    console.log('hola');
};
let id;//con el let convertimos la variable a tipo global para poder USARLA FUERA DE SU CUADRO DE CODIGO, para eso es la variable global, muy importante
 const iniciar = () => {
    console.log('aparecera el hola en 5 segundos ');
     id = setTimeout(saludo, 5000);
 };

//aqui lo que lograste fue hacer que el timeout empiece a correr a partir de darle click al boton den inciar

//____________________________________________________________________________________________________________________________________________________________
//Ahora crearemos un timer con un boton para inciar el contador y uno para pararlo 
const parar = () => {
    console.log('el conteo parara');
    clearTimeout(id);//con clertimeou pararemos el contador de tiempo, lo estamos limpiando no lo estamos pausando, esto se vera en otra leccion. 
 };

 