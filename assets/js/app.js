
console.log('kkk')


document.addEventListener("DOMContentLoaded", function() {

  var contenedorProductos = document.getElementById("contenedor-productos");
  
// Definir los datos en un array de objetos
var productos = [
  {
    imagen: "assets/images/spiderman_cos.png",
    nombre: "Spiderman Cos",
    xocolata: "Xocolata negra",
    mida: "22 x 18 x 22 (amplada x profunditat x alçada)",
    pes: "600gr",
    precio: "50€"
},
{
    imagen: "assets/images/spiderman_mascara.png",
    nombre: "Spiderman  Màscara",
    xocolata: "Xocolata negra",
    mida: "28 x 18 x 22 (amplada x profunditat x alçada)",
    pes: "1300gr",
    precio: "65€"
},
{
    imagen: "assets/images/batman.png",
    nombre: "Batman Màscara",
    xocolata: "Xocolata negra",
    mida: "22 x 13 x 22 (amplada x profunditat x alçada)",
    pes: "600gr",
    precio: "50€"
},
{
    imagen: "assets/images/bluey.png",
    nombre: "Superman Cos",
    xocolata: "Xocolata negra i serigrafia de xocolata blanca",
    mida: "28 x 18 x 22",
    pes: "1000gr",
    precio: "62€"
},
{
    imagen: "assets/images/princesas.png",
    nombre: "Princesas",
    xocolata: "Xocolata negra i serigrafia de xocolata blanca",
    mida: "22 x 13 x 23 (amplada x profunditat x alçada)",
    pes: "650gr",
    precio: "48€"
},
{
    imagen: "assets/images/mickey.png",
    nombre: "Mickey",
    xocolata: "Xocolata negra i serigrafia de xocolata blanca",
    mida: "22 x 13 x 23",
    pes: "550gr",
    precio: "48€"
},
{
    imagen: "assets/images/sirenita.png",
    nombre: "Sirenita",
    xocolata: "Xocolata negra i serigrafia de xocolata blanca",
    mida: "23 x 22 x 23 (amplada x profunditat x alçada)",
    pes: "600gr",
    precio: "48€"
},
{
    imagen: "assets/images/huevo.png",
    nombre: "Ou mundi",
    xocolata: "Base de xocolata negra i figures de xocolata blanca",
    mida: "15 x 15 x 20 (amplada x profunditat x alçada)",
    pes: "400gr",
    precio: "32€"
},
{
    imagen: "assets/images/paw_patrol.png",
    nombre: "Patrulla Canina",
    xocolata: "Xocolata negra i serigrafia de xocolata blanca",
    mida: "22 x 13 x 22 (amplada x profunditat x alçada)",
    pes: "600gr",
    precio: "48€"
},
{
    imagen: "assets/images/ratones.png",
    nombre: "Ratolins",
    xocolata: "Xocolata negra i figura de xocolata negra",
    mida: "22 x 13 x 22 (amplada x profunditat x alçada)",
    pes: "500gr",
    precio: "48€"
},
{
    imagen: "assets/images/cafetera.png",
    nombre: "Cafetera",
    xocolata: "Xocolata negra i figura de xocolata negra",
    mida: "22 x 13 x 22",
    pes: "500gr",
    precio: "48€"
},
{
    imagen: "assets/images/pspmando.png",
    nombre: "Psp Mando",
    xocolata: "Xocolata negra i serigrafia de xocolata blanca",
    mida: "22 x 13 x 23 (amplada x profunditat x alçada)",
    pes: "510gr",
    precio: "48€"
},
{
    imagen: "assets/images/switch.png",
    nombre: "Switch",
    xocolata: "Xocolata negra i serigrafia de xocolata blanca",
    mida: "22 x 13 x 23 (amplada x profunditat x alçada)",
    pes: "650gr",
    precio: "50€"
},
{
    imagen: "assets/images/tamagochi.png",
    nombre: "Tamagochi",
    xocolata: "Xocolata negra i serigrafia de xocolata blanca",
    mida: "22 x 13 x 23 (amplada x profunditat x alçada)",
    pes: "550gr",
    precio: "50€"
},
{
    imagen: "assets/images/jurassic1.png",
    nombre: "Dinosaure 1 coll llarg",
    xocolata: "Xocolata negra i serigrafia de xocolata blanca",
    mida: "28 x 18 x 23 (amplada x profunditat x alçada)",
    pes: "750gr",
    precio: "52€"
},
{
    imagen: "assets/images/jurassic2.png",
    nombre: "Dinosaure 2",
    xocolata: "Xocolata negra i serigrafia de xocolata blanca",
    mida: "28 x 18 x 23 (amplada x profunditat x alçada)",
    pes: "900gr",
    precio: "58€"
},
{
    imagen: "assets/images/barbie_surfista.png",
    nombre: "Barbie Surfista",
    xocolata: "Xocolata negra i serigrafia de xocolata blanca",
    mida: "22 x 13 x 23 (amplada x profunditat x alçada)",
    pes: "650gr",
    precio: "48€"
},
{
    imagen: "assets/images/barbie_auto.png",
    nombre: "Barbie cotxe",
    xocolata: "Xocolata negra i serigrafia de xocolata blanca",
    mida: "28 x 13 x 28 (amplada x profunditat x alçada)",
    pes: "850gr",
    precio: "58€"
},
{
    imagen: "assets/images/barbie_huevo.png",
    nombre: "Barbie ou rosa",
    xocolata: "Xocolata negra i serigrafia de xocolata blanca",
    mida: "22 x 13 x 22 (amplada x profunditat x alçada)",
    pes: "670gr",
    precio: "48€"
},
{
    imagen: "assets/images/mig_camp_sj.png",
    nombre: "Mig camp futbol Sant Just",
    xocolata: "Xocolata negra i serigrafia de xocolata blanca",
    mida: "25 x 18 x 22 (amplada x profunditat x alçada)",
    pes: "800gr",
    precio: "52€"
},
{
    imagen: "assets/images/mig_camp_barsa.png",
    nombre: "Mig Camp futbol Barça",
    xocolata: "Xocolata negra i serigrafia de xocolata blanca",
    mida: "28 x 18 x 22 (amplada x profunditat x alçada)",
    pes: "800gr",
    precio: "52€"
},
{
    imagen: "assets/images/camp_sj.png",
    nombre: "Camp futbol sant Just",
    xocolata: "Xocolata negra i serigrafia de xocolata blanca",
    mida: "29 x 21 x 22 (amplada x profunditat x alçada)",
    pes: "1300gr",
    precio: "68€"
},
{
    imagen: "assets/images/camp_barsa.png",
    nombre: "Camp futbol Braça",
    xocolata: "Xocolata negra i serigrafia de xocolata blanca",
    mida: "29 x 21 x 22 (amplada x profunditat x alçada)",
    pes: "1300gr",
    precio: "68€"
},
{
  imagen: "assets/images/bota_sj.png",
  nombre: "Bota Sant Just",
  xocolata: "Xocolata negra i serigrafia de xocolata blanca",
  mida: "22 x 13 x 23 (amplada x profunditat x alçada)",
  pes: "500gr",
  precio: "48€"
},
{
  imagen: "assets/images/barsa_bota.png",
  nombre: "Bota Braça",
  xocolata: "Xocolata negra i serigrafia de xocolata blanca",
  mida: "22 x 13 x 23 (amplada x profunditat x alçada)",
  pes: "500gr",
  precio: "48€"
},
{
  imagen: "assets/images/payaso.png",
  nombre: "Pallassa 3D",
  xocolata: "Xocolata negra i figures de xocolata blanca",
  mida: "17 x 17 x  (amplada x profunditat x alçada)",
  pes: "800gr",
  precio: "58€"
},
{
  imagen: "assets/images/granota.png",
  nombre: "Granota 3D",
  xocolata: "Xocolata negra i figures de xocolata blanca",
  mida: "17 x 17 x ",
  pes: "800gr",
  precio: "58€"
},
{
  imagen: "assets/images/carrousel.png",
  nombre: "Carrousel",
  xocolata: "Xocolata negra i figures de xocolata blanca",
  mida: "17 x 17 x  (amplada x profunditat x alçada)",
  pes: "900gr",
  precio: "58€"
},
{
  imagen: "assets/images/supermario.png",
  nombre: "Supermario",
  xocolata: "Xocolata negra i serigrafia de xocolata blanca",
  mida: "28 x 18 x 22 (amplada x profunditat x alçada)",
  pes: "900gr",
  precio: "58€"
},
{
  imagen: "assets/images/mic.png",
  nombre: "Mic",
  xocolata: "Xocolata negra i serigrafia de xocolata blanca",
  mida: "22 x 13 x 23 (amplada x profunditat x alçada)",
  pes: "700gr",
  precio: "48€"
}
  
];

// Función para crear y mostrar los productos en el HTML
function mostrarProductos() {
  // Seleccionar el contenedor donde se insertarán los productos
  // var contenedorProductos = document.getElementById("contenedor-productos");

  // Recorrer el array de productos
  productos.forEach(function(producto) {
      // Crear el elemento <div> con la clase y las propiedades necesarias
      var productoDiv = document.createElement("div");
      productoDiv.classList.add("img-box", "col-lg-4", "col-md-6", "col-sm-6");

      // Crear y configurar la imagen
      var imagen = document.createElement("img");
      imagen.src = producto.imagen;
      imagen.alt = "product";
      imagen.classList.add("img-responsive");
      productoDiv.appendChild(imagen);

      // Crear y configurar el título
      var titulo = document.createElement("h5");
      titulo.textContent = producto.nombre;
      productoDiv.appendChild(titulo);

      // Crear y configurar las descripciones
      var xocolata = document.createElement("p");
      xocolata.classList.add("desc");
      xocolata.textContent = producto.xocolata;
      productoDiv.appendChild(xocolata);

      var mida = document.createElement("p");
      mida.classList.add("mida");
      mida.textContent = producto.mida;
      productoDiv.appendChild(mida);

      var pes = document.createElement("p");
      pes.classList.add("pes");
      pes.textContent = producto.pes;
      productoDiv.appendChild(pes);

      // Crear y configurar el precio
      var precio = document.createElement("p");
      precio.classList.add("para", "price");
      precio.textContent = producto.precio;
      productoDiv.appendChild(precio);

      // Insertar el producto en el contenedor
      contenedorProductos.appendChild(productoDiv);
  });
}
   mostrarProductos();
});


