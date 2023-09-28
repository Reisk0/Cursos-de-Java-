//alertas para informar al usuario de algo 

//alert('Hola esto es una pruena'); dejaremos esta alerta como comentario para que no estorbe 

//ventanas de confirmacion MUY UTIL 
//una ventana de confirmacion donde el usuario puede aceptar o cancelar como cuando aceptas o no los cookies 

const Ingresar = ()=> {
    const accesoPermitido = confirm('eres mayor de edad ?');
    if(accesoPermitido){
        alert('Bienvenido')} 
    else {
        alert('No puedes acceder')
    }
}; 