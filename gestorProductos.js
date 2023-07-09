class ProductManager {
    constructor() {
        this.products = [];
    }

    static id = 0;

    
    agregarProducto(titulo, descripcion, precio, imagen, codigo, existencias) {
        ProductManager.id++
        this.products.push({ titulo, descripcion, precio, imagen, codigo, existencias, id:ProductManager.id });
    }

    obtenerProductos() {
        return this.products;
    }

    ObtenerProductosPorId(id) {
        if(!this.products.find((productos) => productos.id === id)){
            console.log("Not found");
        } else {
            console.log("Existe el producto");
        }
    }
}

const productos = new ProductManager

// Primer test de productos mostrando el array vacio por que esta recien creado 
console.log(productos.obtenerProductos(), "El Array se encuentra Vacio \n");

// Agregamos un producto para ver que si nos queda agregado en el array 
productos.agregarProducto("Elementos", "Pelicula Infantil muy animada", 10000, "imagen1", "1234ABC", 10);
productos.agregarProducto("sirenita", "Pelicula Infantil", 2000, "imagen2", "ABC123", 5);

// Realizamos de nuevo la consulta de los productos que hay en el Array, nos debe mostrar los que agregamos
console.log(productos.obtenerProductos());


// Buscamos el producto por id para saber si existe o no 
productos.ObtenerProductosPorId(3);


