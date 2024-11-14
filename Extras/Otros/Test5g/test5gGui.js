/**
 * Formularios para los pedidos
 */

let orderList = [];
let productList = [];

function createProduct() {
    let newProductName = document.getElementById('nombre-producto'.toLocaleLowerCase()).value;
    let newProductPrice = parseFloat(document.getElementById('precio-producto').value);

    if (!newProductName || !newProductPrice){ // VALIDA SI LOS CAMPOS SE ENVIAN VACÍOS
        return alert("Error, verifique los datos del producto!");
    } else {
        var product = { // ASIGNA LOS VALORES DE LAS PROPIEDADES DEL OBJETO
            productName: newProductName,
            price: parseFloat(newProductPrice)
        };
        productList.push(product); // AGREGA EL OBJETO A LA LISTA
        // let jsonString = JSON.stringify(productList, null, 2);
        // console.log(jsonString);
        document.getElementById('nombre-producto').value = "";
        document.getElementById('precio-producto').value = "";
        return alert(`Producto: ${product.productName} creado!`);
    }
 }

 function getAllProducts() { // MOSTRAR EL LISTADO DE PRODUCTOS RECIEN REGISTRADOS
    if (productList.length < 1) {
        alert("LA BASE DE DATOS DE PRODUCTOS ESTÁ VACÍA!");
    } else {
        productList.forEach(product => { // MUESTRA LOS PRODUCTOS DE LA LISTA POR NOMBRE Y PRECIO
            console.log(`Producto: ${product.productName}\nPrecio: ${product.price}`);
        });
    }
 }