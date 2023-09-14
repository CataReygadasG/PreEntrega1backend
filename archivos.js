const fs = require("fs");
const programa = async()=>{
    try{
        const nombreArchivo = "package.json";
        const contenidoString = await fs.promises.readFile(nombreArchivo, "utf-8");
        const contenidoObj = JSON.parse(contenidoString);
        const size = Buffer.byteLength(contenidoString, "utf-8");
        const info = {
            contenidoString,
            contenidoObj,
            size
        };
        console.log(info);
        await fs.promises.writeFile("info.json", JSON.stringify(info, null, 2), "utf-8");
        console.log("El objeto info se ha guardado en info.json");
    }
    catch(error){
        throw new Error("error al leer o escribir archivo: " + error.message);
    }
}
programa();