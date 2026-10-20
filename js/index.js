/* ============================================================
   PAGINA DE PRODUCTOS
   Recorre el array de productos y arma una card por cada uno.
   ============================================================ */

function mostrarProductos() {
  const grilla = document.getElementById("grilla-productos");
  grilla.innerHTML = "";   // empezamos con la grilla vacia

  for (let i = 0; i < productos.length; i++) {
    const producto = productos[i];

    grilla.innerHTML += `
      <article class="card">
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <div class="card-info">
          <span class="categoria">${producto.categoria}</span>
          <h3>${producto.nombre}</h3>
          <p>${producto.descripcion}</p>
          <span class="precio">${formatearPrecio(producto.precio)}</span>
          <button onclick="agregarProducto(${producto.id})">
            <i class="fa-solid fa-cart-plus"></i> Agregar al carrito
          </button>
        </div>
      </article>
    `;
  }
}

mostrarProductos();
