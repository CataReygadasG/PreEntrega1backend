import express from 'express';
const app = express();
const usuarios = [
    {id:"1", nombre:"Jorge", apellido:"Espinoza", edad:"23"},
    {id:"2", nombre:"Matias", apellido:"Leon", edad:"22"},
    {id:"3", nombre:"Valentina", apellido:"Zavala", edad:"30"}
];
app.get('/', (req, res)=>{
    res.send({usuarios});
});
app.get('/:userID', (req, res)=>{
    let idUsuario = req.params.userID;//leyendo el paramentro de la url
    let usuario = usuarios.find(u => u.id === idUsuario);//me buscar algo en un array
    if(!usuario){ return res.send({error: "Usuario no encontrado"}) } 
    res.send({usuario})
});
app.listen("8080", ()=>{
    console.log("servidor activo");
});