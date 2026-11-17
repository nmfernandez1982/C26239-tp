/* ============================================================
   PAGINA DE PRODUCTOS
   Pide los productos a la API y arma una card por cada uno.
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

// Mensaje mientras esperamos la respuesta de la API
function mostrarCargando() {
  const grilla = document.getElementById("grilla-productos");
  grilla.innerHTML = `<p class="mensaje-grilla"><i class="fa-solid fa-spinner fa-spin"></i> Cargando productos...</p>`;
}

// Mensaje si la API no responde
function mostrarError() {
  const grilla = document.getElementById("grilla-productos");
  grilla.innerHTML = `<p class="mensaje-grilla">No pudimos cargar los productos. Probá de nuevo más tarde.</p>`;
}

mostrarCargando();

cargarProductos()
  .then(function () {
    mostrarProductos();
  })
  .catch(function (error) {
    console.error(error);
    mostrarError();
  });
