const productos = [
    { nombre: "leche", precio: 120 },
    { nombre: "polenta", precio: 87 },
    { nombre: "yogurt bebible", precio: 220 },
    { nombre: "arroz", precio: 110 },
    { nombre: "agua 2 lts", precio: 95 },
    { nombre: "desodorante antitranspirante", precio: 200 },
    { nombre: "azucar", precio: 130 },
    { nombre: "yerba 1kg", precio: 600 },
    { nombre: "rollo de cocina", precio: 150 },
    { nombre: "papel higienico", precio: 205 },
];

let carrito = []

let seleccion = prompt("¡Hola!, ¿desea comprar algun producto?");

while (seleccion != "si" && seleccion != "no") {
    alert("Por favor, respondo por si o por no.");
    seleccion = prompt("¡Hola!, ¿desea comprar algun producto?");
}

if (seleccion == "si") {
    alert("¡Genial!, a continuación podrá ver y elegir cualquiera de nuestros productos.");
    let listadoDeProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$");
    alert(listadoDeProductos.join(" - "));
} else if (seleccion == "no") {
    alert("¡Hasta la próxima!");
}

while (seleccion != "no") {
    let producto = prompt("Agregá un producto a tu carrito.");
    let precio = 0

    if (producto == "leche" || producto == "polenta" || producto == "yogurt bebible" || producto == "arroz" || producto == "agua 2 lts" || producto == "desodorante antitranspirante" || producto == "azucar" || producto == "yerba 1kg" || producto == "rollo de cocina" || producto == "papel higienico") {
        switch (producto) {
            case "leche":
                precio = 120;
                break;
            case "polenta":
                precio = 87;
                break;
            case "yogurt bebible":
                precio = 220;
                break;
            case "arroz":
                precio = 110;
                break;
            case "agua 2lts":
                precio = 95;
                break;
            case "desodorante antitranspirante":
                precio = 200;
                break;
            case "azucar":
                precio = 130;
                break;
            case "yerba 1kg":
                precio = 600;
                break;
            case "rollo de cocina":
                precio = 150;
                break;
            case "papel higienico":
                precio = 205;
                break;
        }
        let unidades = parseInt(prompt("¿Cuantas unidades desea llevar?"));

        carrito.push({producto, unidades, precio});
    }else{
        alert("No tenemos ese producto.");
    }
seleccion = prompt("¿Desea seguir comprando?");

while(seleccion == "no"){
    alert("Gracias por la compra, hasta la próxima.");
    carrito.forEach((carritoCompras) => {console.log(`Producto: ${carritoCompras.producto}, Unidades: ${carritoCompras.unidades}, {Total a pagar: ${carritoCompras.unidades * carritoCompras.precio}}`)});
    break;
}
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);

               //         Total detallado de la compra salida por consola.
               
console.log(`El total de tu compra es: $ ${total}`);