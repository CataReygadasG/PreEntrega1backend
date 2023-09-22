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
      this.products.push(newProduct); //push: agregando al array vacio
      fs.writeFileSync(this.path, JSON.stringify(this.products, null, 2), "utf-8");
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
    const ExisteId = JSON.parse(fs.readFileSync(this.path, "utf-8")).find((product) => product.id === id);
    if (ExisteId) {
      return ExisteId;
    } else {
      console.log("Error");
    }
    
}


  //Borrar
  deleteProduct = (id) => {
    const newArray = JSON.parse(fs.readFileSync(this.path, "utf-8")).filter((item)=> item.id !== id);
    if(newArray){
      fs.unlinkSync(this.path);
      newArray.sort((a, b)=> a.id - b.id);
      fs.writeFileSync(this.path, JSON.stringify(newArray, null, 2));
      return newArray;
    }else{
      console.log("Error no existe el id");
    }
    
  }
  //Actualización, debe recibir el id del producto al actualizar
  updateProduct = (id, update) => {
    let products = JSON.parse(fs.readFileSync(this.path, "utf-8"));
    const productoEncontrado = products.find(item => item.id === id);
    if(productoEncontrado){
      const productoActualizado = {
        id:id,
        ...update
      };
      const indiceProducto = products.indexOf(productoEncontrado);
      products[indiceProducto] = productoActualizado;
      fs.writeFileSync(this.path, JSON.stringify(products, null, 2));
    }else{
      console.log("error: no se contro producto con el id especifico");
    }
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

//console.log(productManager.getProducts());
//console.log(productManager.getProductById(1));
//console.log(productManager.deleteProduct(3));
productManager.updateProduct(3,
  {
    title:"Arete de oro",
    description: "Anillo con forma",
    price:600000,
    thumbnail: ".img/arete.jpg",
    code:"ABBB005",
    stock:9
  }
 
);
