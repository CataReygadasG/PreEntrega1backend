//entrega 1
const fs = require("fs"); //IMPORTAMOS LA LIBRERIA
//let data = "Hola mundo";
class ProductManager {
  constructor() {
    this.products = []; //inicializo con array vacio
    this.productId = 1;
    this.path = 'datos.txt';
  }
  addProduct(title, description, price, thumbnail, code, stock) {
    const productExistente = this.products.find(
      (product) => product.code === code
    );
    if (productExistente) {
      console.log("Error");
    } else {
      const newProduct = {
        id: this.productId++,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };
      //El null significa que no, se realizara ningún reemplazo especial durante la conversión
      //El 2 es la cantidad de espacio sangría que se usara, para formatear la cadena de JSON
      fs.writeFileSync(this.path, JSON.stringify(this.products, null, 2)); //1.ARCHIVO(PARA QUE LO CREE, 2.Lo que yo quiero guardar)
      this.products.push(newProduct); //push: agregando al array vacio
    }
  }
  getProducts = () => {
    const products = fs.readFileSync(this.path, "utf-8");
    return JSON.parse(products);
    console.log(products);
  }
  };
  getProductById = (id) => {
    const ExisteId = this.products.find((product) => product.id === id);
    if (fs.existsSync(this.path )) {
      //metodo que me devuelve si existe o ni el archivo
      let contenido = fs.readFileSync(this.path , "utf-8"); //2.codificaión de los caracteres
      console.log(contenido);
    }
    if (ExisteId) {
      console.log(ExisteId);
    } else {
      console.log("Error");
    }
  };
  deleteProduct = () => {
    //fs.unlinkSync("datos.txt");//Eliminarlo
    fs.appendFileSync(this.path , " Más datos ");
    contenido = fs.readFileSync(this.path, "utf-8");
    console.log(contenido);
    fs.unlinkSync("datos.txt");
  };
  updateProduct = () => {
    fs.appendFileSync(this.path, " Más datos ");
    contenido = fs.readFileSync(this.path, "utf-8");
    console.log(contenido);
  };


const productManager = new ProductManager();
productManager.addProduct(
  "Anillo",
  "Anillo de oro con brillante",
  1200000,
  ".img/1.jpg",
  "ABBB001",
  12
);
productManager.addProduct(
  "Anillo",
  "Anillo con brilllantes",
  70000,
  ".img/2.jpg",
  "ABBB002",
  12
);

productManager.addProduct(
  "Anillo de compromiso",
  "Anillo de oro",
  800000,
  ".img/anillo1.jpg",
  "ABBB003",
  8
);
console.log(productManager.getProducts());
console.log(productManager.getProductById(1));
