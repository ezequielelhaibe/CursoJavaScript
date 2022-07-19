const tarjetas = document.getElementById("tarjetaProducto");
productos.forEach((productosDisponibles,indice)=>{
    let card = document.createElement("div");
    card.classList.add("card", "col-sm-12", "col-lg-4")
    card.innerHTML=`
        <img src="${productosDisponibles.imagen}" class="card-img-top" alt="imagenproducto">
        <div class="card-body">
        <h5 class="card-title">${productosDisponibles.nombre}</h5>
        <p class="card-text">${productosDisponibles.descripcion}</p>
        <p class="card-text">$ ${productosDisponibles.precio}</p>
        <a href="#" class="btn btn-primary" onClick="agregarCarrito(${indice})">COMPRAR</a>
        </div>
        `;
    tarjetas.appendChild(card);
});

let cuadrocarrito = document.getElementById("cart");
let total = 0;
const crearcarrito = ()=>{
    cuadrocarrito.className = "cart";
    cuadrocarrito.innerHTML = "";
    if(cart.length > 0){
        cart.forEach((productosDisponibles, indice)=> {
            total = total + productosDisponibles.precio * productosDisponibles.cantidad;
            const cajacarrito = document.createElement("div");
            cajacarrito.className = "producto-carrito";
            cajacarrito.innerHTML = `
            <img class="car-img" src="${productosDisponibles.imagen}"/></div>
            <div class="product-details">${productosDisponibles.nombre}</div>
            <div class="product-details"> Cantidad: ${productosDisponibles.cantidad}</div>
            <div class="product-details"> Precio: $ ${productosDisponibles.precio}</div>
            <div class="product-details">Total: $ ${productosDisponibles.cantidad * productosDisponibles.precio}</div>
            <button class="btn btn-info" id="remove-product" onClick="removeProduct(${indice})">Eliminar</button>
            `;
            cuadrocarrito.appendChild(cajacarrito);
        });
            const totalcuadrocarrito = document.createElement("div");
            totalcuadrocarrito.className = "total-carrito";
            totalcuadrocarrito.innerHTML = `
            <div class="total"> TOTAL: $ ${total}</div>
            <button class="btn btn-info finalizar" id="finalizar" onClick="finalizarcompra()"> FINALIZAR COMPRA </button>
            `;
            cuadrocarrito.appendChild(totalcuadrocarrito)
        }
        else{
            cuadrocarrito.classList.remove("cart");
        }
};

let cart = [];

const agregarCarrito=(indice)=>{
    const indiceEncontradoCarrito = cart.findIndex((elemento)=>{
        return elemento.id === productos[indice].id;
    });
    if(indiceEncontradoCarrito === -1){
        const agregarproducto= productos[indice];
        agregarproducto.cantidad = 1;
        cart.push(agregarproducto);
        actualizarlocalstorage(cart);
        crearcarrito();
    }
    else {
        cart[indiceEncontradoCarrito].cantidad += 1
        actualizarlocalstorage(cart);
        crearcarrito();
    }
};

const removeProduct =(indice)=>{
    cart.splice(indice, 1);
    actualizarlocalstorage(cart);
    crearcarrito();
};

const finalizarcompra = ()=> {
    const finaltotal = document.getElementsByClassName("total-carrito")[0].innerHTML;
    cuadrocarrito.innerHTML ="";
    const comprafinalizada = `
    <div class="product-details">Total: $ ${total}</div>
    <p class="datos-parrafo"> Ya casi estamos! Decinos donde te entregamos tu nueva notebook.</p>
    <button class="btn btn-info formulario" id="formulario" onClick="crearformulario()"> AGREGAR DIRECCION</button>
    `;
    cuadrocarrito.innerHTML = comprafinalizada;
};

const crearformulario =()=> {
    cuadrocarrito.innerHTML ="";
    const formulario = `
    <h2> FORMULARIO DE ENTREGA</h2>
    <div class="contact__secction-conteiner">
        <div class="row">
            <div class="contact__secction__item">
                <label>Nombre</label>
                <input type="text" id="nombre" placeholder="Nombre">
            </div>
            <div class="contact__secction__item">
                <label>Dirreccion</label>
                <input type="text" id="dirreccion" placeholder="Dirreccion">
            </div>
            <div class="contact__secction__item">
                <label>Codigo Postal</label>
                <input type="text" id="codigopostal" placeholder="Codigo Postal">
            </div>
            <div class="contact__secction__item">
                <label>Telefono</label>
                <input type="text" id="telefono" placeholder="Telefono">
            </div>
            <div class="contact__secction__item">
                <label>Mail</label>
                <input type="text" id="mail" placeholder="Mail">
            </div>
            <div class="contact-button">
                <button type="button" class="btn btn-info envio" onClick="msjgracias()"> CONFIRMAR </button>
            </div>
        </div>
    </div>
    `;
    cuadrocarrito.innerHTML = formulario;
};

const msjgracias = () => {
    const nombreCliente = document.getElementById("nombre").value;
    const domiciliocliente = document.getElementById("dirreccion").value;
    cuadrocarrito.innerHTML = "";
    let mensaje = `
    <div class="mensaje-final"> ${nombreCliente}, Muchas gracias por tu compra! En 48 horas recibiras tu nueva notebook en ${domiciliocliente}
</div>
    `;
    cuadrocarrito.innerHTML = mensaje;
};

const actualizarlocalstorage = (cart)=>{
    localStorage.setItem("cart", JSON.stringify(cart))
};


