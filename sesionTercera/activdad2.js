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
}else if(jugador1 == tijera && jugador2 == papel){
    console.log("jugador2 gana")
}else if(jugador1 == papel && jugador2 == papel){
    console.log("empate")
}else if(jugador1 == papel && jugador2 == tijera){
    console.log("jugador2 gana")
}else if(jugador1 == papel && jugador2 == piedra){
    console.log("jugador1 gana")
}







let  jugadores1= prompt("Jugadro1 enter 'Piedra, Papel o Tijera'"); 
let jugadores2 = prompt("Jugador2 enter 'Piedra, Papel o Tijera'");

if (jugadores1 == "Piedra"){
    switch(jugadores2){
        case "Piedra":
            console.log("Draw");
        break;

        case "Papel":
            console.log("Player2 Wins");
        break;

        case "Tijera":
            console.log("Player1 Wins");
    }
}

if (jugadores1 == "Papel"){
    switch(jugadores2){
        case "Papel":
            console.log("Draw");
        break;

        case "Tijera":
            console.log("jugador 2 Wins");
        break;

        case "Piedra":
            console.log("Jugador 1 Wins");
    }
}

if (jugadores1 == "Tijera"){
    switch(jugadores2){
        case "Tijera":
            console.log("empate");
        break;

        case "Piedra":
            console.log("jugador2 Wins");
        break;

        case "Papel":
            console.log("jugador1 Wins");
    }
}