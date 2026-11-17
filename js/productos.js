/* ============================================================
   PRODUCTOS DESDE LA API (Fake Store API)
   En vez de tener los productos escritos a mano, los pedimos
   a https://fakestoreapi.com/products con fetch.
   La API los devuelve en ingles y con otros nombres de campos,
   asi que los "traducimos" al mismo formato que usabamos antes:
   { id, nombre, categoria, descripcion, precio, imagen }
   ============================================================ */

const URL_API = "https://fakestoreapi.com/products";

// Empieza vacio y se llena cuando llega la respuesta de la API.
let productos = [];

// Traduccion de las categorias que manda la API.
const categoriasEnEspanol = {
  "men's clothing": "Ropa de hombre",
  "women's clothing": "Ropa de mujer",
  "jewelery": "Joyería",
  "electronics": "Electrónica"
};

// Convierte un producto de la API a nuestro formato.
function adaptarProducto(productoApi) {
  return {
    id: productoApi.id,
    nombre: productoApi.title,
    categoria: categoriasEnEspanol[productoApi.category] || productoApi.category,
    descripcion: productoApi.description,
    precio: productoApi.price,
    imagen: productoApi.image
  };
}

// Pide los productos a la API y los guarda en el array "productos".
// Devuelve una promesa: usamos .then() para saber cuando termino.
function cargarProductos() {
  return fetch(URL_API)
    .then(function (respuesta) {
      if (!respuesta.ok) {
        throw new Error("Error " + respuesta.status);
      }
      return respuesta.json();   // texto -> array de objetos
    })
    .then(function (datos) {
      productos = datos.map(adaptarProducto);
      return productos;
    });
}
