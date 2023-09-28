console.log(window);
console.log(`la ventana de tu navegador mide ${window.innerWidth} px de ancho`);
console.log(`la ventana de tu navegador mide ${window.innerHeight} px de alto`);

// window open()
//Nos permite abrir ventanas del navegador 
//1mer parametro: direccion de la nueva ventana 
//2do parametro: nombre de la ventana 
//3cer parametro: cadena de texto de opciones 

//nos devuelve un objeto para acceder a esa ventana 
let ventana;
const Abrirventana = () => {
  window.open ('https://www.google.com.mx/?hl=es', 'mi nueva ventana', 'with=500, height=500'); //abrir una pagina google desde java, 
  //inclusive puedes controlar el tamano de esa nueva pagina en una sola linea de codigo usando los tres parametros que te mencione en el encabezado
}; 

const Cerrarventana = () => {
 ventana.close();
};

//_____________________________________________________________________________________________________________________________________________
//Screen Object  con esto representamos la pantalla del usuario 
console.log ('El ancho de mi pantalla: ', window.screen.width);//muy importante no olvidar la coma (,) antes del window
console.log ('El alto de mi pantalla: ', window.screen.height);

