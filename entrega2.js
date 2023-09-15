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
    const productExistente = this.products.find((product) => product.code === code);
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

      fs.writeFileSync(this.path, JSON.stringify(this.products, null, 2), "utf-8");
      this.products.push(newProduct); //push: agregando al array vacio
    }
  }
  getProducts = () => {
   // const products = fs.readFileSync(this.path, "utf-8");
   // return JSON.parse(products);
   // console.log(products);
   try{
    return JSON.parse(fs.readFileSync(this.path, "utf-8")) || [];
   }catch(error){
    return[];

   }
  }
 

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

  //Borrar
  deleteProduct = () => {
    //fs.unlinkSync("datos.txt");//Eliminarlo
    fs.appendFileSync(this.path , " Más datos ");
    contenido = fs.readFileSync(this.path, "utf-8");
    console.log(contenido);
    fs.unlinkSync("datos.txt");
  };
  //Actualización
  updateProduct = () => {
    fs.appendFileSync(this.path, " Más datos ");
    contenido = fs.readFileSync(this.path, "utf-8");
    console.log(contenido);
  };

  };

  
//-------------------------
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
  "Arete de oro",
  "Anillo con forma",
  500000,
  ".img/arete.jpg",
  "ABBB005",
  7
);
console.log(productManager.getProducts());
//console.log(productManager.getProductById(1));
