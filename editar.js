var editando=false;

//metodo cuando pulsemos editas y nos guarde los datos
function metodoEditar(nodo){

if (editando == false) {

//dependiendo del nodo encontramos el padre
var nodoPadre = nodo.parentNode; 
//al nodo abuelo lo encontramos con el nodo padre
var nodoAbuelo = nodoPadre.parentNode; 

//desde la tabla tesEdiciontablas.html traemos los datos aun arreglo
var nodoContenedorForm = document.getElementById('nodoA'); 

//encontramos todos los nodos abuelos o padres de los nodos padres
var nodosAbuelos = nodoAbuelo.getElementsByTagName('td');

//nodo dependiendo de cada categoria
var nodoAlimento = nodosAbuelos[0].textContent; 
var nodoCalorias = nodosAbuelos[1].textContent;
var nodoGrasas = nodosAbuelos[2].textContent;
var nodoProteina = nodosAbuelos[3].textContent; 
var nodoCarbohidratos = nodosAbuelos[4].textContent;
var ok = nodosAbuelos[5].textContent;
var opciones = nodosAbuelos[6].textContent;

//permite editar los campos
var nuevoCodigoHtml = '<td><input type="text" name="alimento" id="alimento" value="'+nodoAlimento+'" size="10"></td>'+

'<td><input type="text" name="calorias" id="calorias" value="'+nodoCalorias+'" size="5"</td>'+

'<td><input type="text" name="grasas" id="grasas" value="'+nodoGrasas+'" size="5"</td>'+

'<td><input type="text" name="proteina" id="proteina" value="'+nodoProteina+'" size="5"</td>'+

'<td><input type="text" name="carbohidratos" id="carbohidratos" value="'+nodoCarbohidratos+'" size="5"</td>'+

'<td><select name="ok" id="ok"> <option value="&#x1F60A">bien</option> <option value="&#x1F480;">mal</option><select> <td>En edición</td>';

nodoAbuelo.innerHTML = nuevoCodigoHtml;

//aplca el codigo despues de darle editar y asi aparesca el botom pata pode guaradar
nodoContenedorForm.innerHTML = 'Pulse Aceptar para guardar los cambios o cancelar para anularlos'+

'<form name = "formulario" action ="enviado.html" method="get" onsubmit="capturarEnvio()" onreset="anular()">'+

'<input class="boton" type = "submit" value="Aceptar"> <input class="boton" type="reset" value="Cancelar">';

editando = "true";}

//si el usuario intenta abrir dos campos con esto se le muetra el error
else {alert ('Solo se puede editar una línea. Recargue la página para poder editar otra');

}

}

//permite almacenar los valores que cambiamos 
function capturarEnvio(){

//obtenemos los datos de la tabla en el nodo como e hizo arriba
var nodoContenedorForm = document.getElementById('nodoA'); 

//obtenemos todos los datos por cada categoria por medio del query selector
nodoContenedorForm.innerHTML = 'Pulse Aceptar para guardar los cambios o cancelar para anularlos'+
'<form name = "formulario"  action ="pequena.html" method="get" onsubmit="capturarEnvio()" onreset="anular()">'+
'<input type="hidden" name="alimento" value="'+document.querySelector('#alimento').value+'">'+
'<input type="hidden" name="calorias" value="'+document.querySelector('#calorias').value+'">'+
'<input type="hidden" name="grasas" value="'+document.querySelector('#grasas').value+'">'+
'<input type="hidden" name="proteina" value="'+document.querySelector('#proteina').value+'">'+
'<input type="hidden" name="carbohidratos" value="'+document.querySelector('#carbohidratos').value+'">'+
'<input type="hidden" name="ok" value="'+document.querySelector('#ok').value+'">'+
'<input class="boton" type = "submit" value="Aceptar"> <input class="boton" type="reset" value="Cancelar">';

document.formulario.submit();

}
function anular(){

window.location.reload();

}