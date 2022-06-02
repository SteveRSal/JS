let edad= prompt("¿Cuantos años tienes?");
let nombre= prompt("¿cual es tu nombre?");

if(edad >= 18 && nombre == Mario || Carlos){
    console.log("puedes ingresar al VIP");
}else if(edad >= 18){
    console.log("puede ingresar a la discoteca");
}else{
    console.log("no puedes pasar");
}