const moment = require("moment");
const fechaActual = moment();
const fechaNacimiento = moment("2001-04-03")
if(fechaNacimiento.isValid()){
    const diasPasados = fechaActual.diff(fechaNacimiento, "years");
    console.log(diasPasados);
}else{
    console.log("Fecha no valida");
}