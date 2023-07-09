class ProductManager {
    constructor() {
        this.products = [];
    }

    agregarProducto(titulo, descripcion, precio, imagen, codigo, existencias) {
        this.products.push({ titulo, descripcion, precio, imagen, existencias });
    }

    obtenerProductos() {
        return this.products;
    }

    ObtenerProductosPorId() {

    }
}

const productos = new ProductManager

console.log(productos.obtenerProductos());



