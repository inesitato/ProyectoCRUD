let productos = [];
actualizarArray(productos);
console.log(productos);

const nombreProducto = document.getElementById("nombre");
const precioProducto = document.getElementById("precio");
const descripcionProducto = document.getElementById("descripcion");
const botonAgregar = document.getElementById("botonAgregar");

botonAgregar.addEventListener ("click",(event)=>{
    event.preventDefault();
    let producto = {
             nombre: nombreProducto.value,
             precio: precioProducto.value,
             descripcion: descripcionProducto.value,
         }
    productos.push(producto);
    guardarInfo();
})

function guardarInfo(){ 
    localStorage.setItem("producto",JSON.stringify(productos));
}
function actualizarArray(productos){
        productos = JSON.parse(localStorage.getItem("producto"));
}