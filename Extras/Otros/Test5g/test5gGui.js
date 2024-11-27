/**
 * Formularios para los pedidos
 */

let orderList = [];
let productList = [];
const baselineState = "EN ESPERA";
const inProgress = "EN PREPARACIÓN";
const onDelivery = "EN REPARTO";
const delivered = "ENTREGADO";

function createProduct() {
    let newProductName = document.getElementById('nombre-producto'.toLowerCase()).value;
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

 function getByName() {
    let nameFound = document.getElementById('nombre-producto-all').value.toLowerCase();
    if (productList.length < 1) {
        alert("LA BASE DE DATOS DE PRODUCTOS ESTÁ VACÍA!");
    } else { // REPASAR FILTER E INCLUDE.
        let filterProducts = productList.filter(producto => 
            producto.productName.toLowerCase().includes(nameFound)
        );
        if (filterProducts.length > 0) {
            filterProducts.forEach(producto => {
                console.log(`Producto: ${producto.productName} Precio: ${producto.price}`);
            });
        } else {
            console.log("No se encontraron productos con ese nombre.");
        }
    }
 }

 function takeOrder() {
    let customerName = document.getElementById('nombre-cliente').value.toLowerCase();
    let orderDate = today.toLocaleDateString();
    let orderProduct = document.getElementById('nombre-producto').value.toLowerCase();
    let customerAddress = document.getElementById('direccion-pedido').value.toLowerCase();
    let customerCity = document.getElementById('ciudad-pedido').value.toLowerCase();
    let customerPhone = document.getElementById('phone-number').value.toLowerCase();
    let productQty = parseFloat(document.getElementById('cantidad-producto').value);
    if (productList.length < 1) {
        alert("LA BASE DE DATOS DE PRODUCTOS ESTÁ VACÍA!");
    } else {

    }
 }