//import express from "express";
const http = require("http");
const server = http.createServer((request, response)=>{
    response.end("mi primer hola mundo");
    console.log("consola")
});
server.listen("8080", ()=>{
    console.log("Servidor activo");
});