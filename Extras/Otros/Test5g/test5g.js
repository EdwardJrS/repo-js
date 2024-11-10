/* 
1- Se debe crear un formulario donde se puedan crear los articulos (comida) que seran vendidos, debe contener, el nombre y el valor.

2- Se debe crear un formulario de pedidos de un restaurante, los campos que debe tener son los siguientes: Nombre del cliente, fecha y 
hora del pedido, articulo (debe cargar los articulos registrados en el formulario anterior), cantidad, valor total, dirección, ciudad, telefono del cliente.

3- Se debe tener un listado de todos los pedidos recibidos y por estado. Ej: Acabamos de recibir un pedido y se debe registrar con el estado EN ESPERA, 
una vez que se empiece a preparar, se debe cambiar el estado a EN PREPARACIÓN, cuando este se haya finalizado y pase a entrega de domiciliario se 
debe cambiar el estado a EN REPARTO y cuando sea entregado al cliente, se debe cambiar el estado a ENTREGADO. Se debe llevar registro de fecha y
 hora de cada uno de los cambios de estado.
 */

 /** 
  * un while: Crear producto, tomar pedido, consultar producto, consulta pedido
  * 
 */

 let orderList = [];
 let productList = [];
 let today = new Date();
 const baselineState = "EN ESPERA";
 const inProgress = "EN PREPARACIÓN";
 const onDelivery = "EN REPARTO";
 const delivered = "ENTREGADO";

 // CREAR PRODUCTOS
 function createProducts () {
    let newProductName = prompt("Nombre del producto");
    let newProductPrice = parseFloat(prompt("Precio de producto"));

    if (!newProductName || !newProductPrice){ // VALIDA SI LOS CAMPOS SE ENVIAN VACÍOS
        return alert("Error, verifique los datos del producto!");
    } else {
        var product = { // ASIGNA LOS VALORES DE LAS PROPIEDADES DEL OBJETO
            productName: newProductName,
            price: parseFloat(newProductPrice)
        };
        productList.push(product); // AGREGA EL OBJETO A LA LISTA
        return alert(`Producto: ${product.productName} creado!`);
    }
 }

 function showProducts () { // MOSTRAR EL LISTADO DE PRODUCTOS RECIEN REGISTRADOS
    if (productList.length < 1) {
        alert("LA BASE DE DATOS DE PRODUCTOS ESTÁ VACÍA!");
    } else {
        productList.forEach(product => { // MUESTRA LOS PRODUCTOS DE LA LISTA POR NOMBRE Y PRECIO
            alert(`Producto: ${product.productName}\nPrecio: ${product.price}`);
        });
    }
 }

 function total (productPrice, productQuantity) { //  CALCULA EL TOTAL DE LA COMPRA POR PRODUCTOS
    return productQuantity * productPrice;
 }

 function takeOrders () { // TOMAR ORDEN NUEVA
    let customerName = prompt("Nombre del cliente");
    let orderDate = today.toLocaleDateString();
    let orderProduct = prompt("Producto a ordenar");
    let customerAddress = prompt("Dirección de pedido");
    let customerCity = prompt("Ciudad de domicilio");
    let customerPhone = prompt("Teléfono del cliente");
    let productQty = parseFloat(prompt("Cantidad del producto"));
    if (!customerName || !orderDate || !orderProduct || !customerAddress || !customerCity || !customerPhone || !productQty) {
        return alert("TU PEDIDO NO FUE CREADO, INGRESA TODOS LOS DATOS!");
    } else {
        let totalOrder = total(productList[0].price, productQty);
        let order = {
            orderState: baselineState,
            finalCustomerName: customerName,
            finalOrderDate: orderDate,
            finalOrderProduct: orderProduct,
            finalCustomerAddress: customerAddress,
            finalCustomerCity: customerCity,
            finalCustomerPhone: customerPhone,
            finalProduc: orderProduct,
            finalQty: productQty,
            finalTotal: totalOrder
        }
        orderList.push(order); // AGREGA EL PEDIDO A LA LISTA
        return alert(`Orden para: ${order.finalCustomerName} creada!`);
    }
 }

 function showOrders () { // MOSTRAR LISTADO DE PEDIDOS
    orderList.forEach(order => {
        alert(`Estado: ${order.orderState}\nNombre cliente: ${order.finalCustomerName}\nFecha del pedido: ${order.finalOrderDate}\nDirección de entrega: ${order.finalCustomerAddress}\nCiudad: ${order.finalCustomerCity}\nTeléfono: ${order.finalCustomerPhone}\nProducto: ${order.finalProduc}\nCantidad: ${order.finalQty}\nTotal: ${order.finalTotal}`);
    });
 }

 function changeOrderState () { // CAMBIAR EL ESTADO DE LOS PEDIDOS
    
}

 let viewMainMenu = true;

 while (viewMainMenu) { // MANEJADOR DEL MENÚ PRINCIPAL
    console.log("---------------------------------------- \nBIENVENIDO AL CHUZÓN DE JOSELO DELIVERY \n----------------------------------------");
    let selectOption = prompt("SELECCIONE UNA OPCIÓN \n1) Crear producto \n2) Consultar productos \n3) Tomar pedido \n4) Consutar pedidos \n5) Actualizar pedido \n0) Salir \n");
    switch (selectOption) {
        case "1":
            createProducts();
            break;
        case "2":
            showProducts();
            break;
        case "3":
            takeOrders();
            break;
        case "4":
            showOrders();
            break;
        case "5":
            changeOrderState();
            break;
        case "0":
            viewMainMenu = false;
            break;
        default:
            viewMainMenu = false;
    }
 }