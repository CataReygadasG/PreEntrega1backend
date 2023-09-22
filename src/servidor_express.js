//import express from "express";
const express = require("express")
const app = express();
app.get("/saludo", (req, res)=> {
    res.send("Hola mundo desde express");
});
app.listen("8080", ()=>{
    console.log("servidor activo");
});