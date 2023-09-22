import express from "express";
const app = express();
const puerto = 8080;

app.get('/bienvenido', (req, res)=>{
    res.send('<html><body style="color:blue">Bienvenidos!!</body></html>');
});
app.get('/usuario', (req, res)=>{
    const usuario = {
        nombre: 'pedro',
        apellido:'perez',
        edad:30,
        correo:'p123@gmail.com'
    }
    res.json(usuario);
} );
app.listen(puerto, ()=>console.log("servidor activo"))