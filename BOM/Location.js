//obtner url de la barra de direciciones y cargar nuevos documentos 
console.log(location.href);//con location obtendremos informacion de la ubicacion en la que nos encontramos. 
//con el .href podemos obtner direcatmente la direccion de nuestro sitio web. 

//_______________________________________________________________________________________________________________________
// este metodo nos permitira obtener el hostname de nuestra pagina sin mayor complicacion, lo usaras en un futuro
console.log(location.hostname);

//________________________________________________________________________________________________________________________
//pathname - retorna la ruta y archiva la pagina actual, es la ruta  de mi archivo carpeta por carpeta 
console.log(location.pathname);

//_________________________________________________________________________________________________________________________
//protocol - con el podremos saber que ruta usamos de protocolo http
console.log(location.protocol);


const CargarDocumento = () => {
    location.assign('https://www.google.com.mx/?hl=es');  //no olvides los parentesis para invocar tu botton, eso se encuentra en el docuemnto html, ya te equivocaste una vez en eso 
}; 

//_____________________________________________________________________________________________________________________________________________________________________________
