const fs= require("js");
const crypto = require("cripto");

class useManager {
    constructor(){
        this.path = "usuarios.json";
        this.usuarios = this.cargarUusarios();
    }
    cargarUusarios(){
        try{
            return JSON.parse(fs.readFileSync(this.path, "utf8") || []);
        }catch(error){
            return[];
        }
    }
    guardarUsuarios(){
        fs.writeSync(this.path, JSON.stringify(this.usuarios, null, 2), "utf-8");
    }
    hasPassword(password, salt = crypto.random)
}