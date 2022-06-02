let jugador1 = prompt("escoge piedra, papel o tijera");
let jugador2 = prompt("escoge piedra, papel o tijera");

if(jugador1 == piedra && jugador2 == papel ){
    console.log("jugador2 gana")
}else if(jugador1 == piedra && jugador2 == tijera){
    console.log("jugador1 gana")
}else if(jugador1 == piedra && jugador2 == piedra){
    console.log("empate")
}else if(jugador1 == tijera && jugador2 == tijera){
    console.log("empate")
}else if(jugador1 == tijera && jugador2 == piedra){
    console.log("jugador2 gana")
}