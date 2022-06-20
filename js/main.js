//variables
let producto;
let msiKatana = 235000;
let asusTuf = 195000;
let hpOmen = 205000;
let nombre = prompt ("Bienvenido a GamerSolutions! Como es tu nombre?");
saludar ();
comprarProducto ();


//funciones
function saludar() {
    alert("Hola " + nombre + "! Te invito a elegir tu proxima Notebook.")
}

function comprarProducto() {
    producto = prompt("Escribi el numero de la Notebook que queres \n 1 - MSI Katana G66 \n 2 - ASUS TUF PiJ 344 \n 3 - HP Omen 7800");
    if (producto === "1") (alert("Elegiste MSI Katana G66"))
    else if(producto === "2") (alert("Elegiste ASUS TUF PiJ 344"))
    else if(producto === "3") (alert("Elegiste HP Omen 7800"))
    menu = prompt("Como deseas contuninuar? \n 2 - Precio total de la compra \n 3 - Terminar")
}

function finalizarCompra() {
    if (producto === "1") (alert ("Precio final + IVA = " + (msiKatana * 1.21) + " pesos."))
    if (producto === "2") (alert ("Precio final + IVA = " + (asusTuf * 1.21) + " pesos."))
    if (producto === "3") (alert ("Precio final + IVA = " + (hpOmen * 1.21) + " pesos."))
}

//ciclos
while (menu !== "3") {
    if (menu === "1") {comprarProducto ()}
    if (menu === "2") {finalizarCompra (); menu = "3";}
}

//despedida
alert ("Gracias por tu compra! Vuelva prontos!")


