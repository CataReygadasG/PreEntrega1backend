//entrega 1
const fs = require("fs");//IMPORTAMOS LA LIBRERIA
let data = "Hola mundo";
class ProductManager {
    constructor() {
      this.products = []; //inicializo con array vacio
      this.productId = 1;
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
        fs.writeFileSync("datos.txt", data);//1.ARCHIVO(PARA QUE LO CREE, 2.Lo que yo quiero guardar)
        this.products.push(newProduct); //push: agregando al array vacio
      }
    }
    getProducts = () => {
      return this.products;
    };
    getProductById = (id) => {
      const ExisteId = this.products.find((product) => product.id === id);
      if(fs.existsSync("./datos.txt")){//metodo que me devuelve si existe o ni el archivo
        let contenido = fs.readFileSync("datos.txt", "utf-8");//2.codificaión de los caracteres
        console.log(contenido);
        }
      if (ExisteId) {
        console.log(ExisteId);
      } else {
        console.log("Error");
      }
  }
    };
    fs.unlinkSync("datos.txt");//Eliminarlo
  
  const productManager = new ProductManager();
  productManager.addProduct(
    "Anillo","Anillo de oro con brillante",1200000,".img/1.jpg","ABBB001", 12);
  productManager.addProduct( "Anillo",  "Anillo con brilllantes",  70000, ".img/2.jpg", "ABBB002", 12);
  console.log(productManager.getProducts());
  console.log(productManager.getProductById(1))
  
