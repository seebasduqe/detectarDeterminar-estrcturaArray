"use strict";
const detectorPalabras = () => {
    //Declaracion variable Cadena de string
    const primeraCadenaDeTexto = "hello world, big WoRld.()!¡?¿";
    console.log(primeraCadenaDeTexto); // ---> hello world, big WoRld.()!¡?¿
    //Palabras a buscar en la cadena de string y mirar cuantas veces se repite
    const palabra1 = "hello";
    const palabra2 = "world";
    const palabra3 = "big";
    // variables del valor de las veces que estan las palabras a buscar inicializadas en 0
    let vecesPalabra1EstaEnLaCadena = 0;
    let vecesPalabra2EstaEnLaCadena = 0;
    let vecesPalabra3EstaEnLaCadena = 0;
    //Pasamos el string en su totalidad en minuscula
    const primeraCadenaDeTextoMinus = primeraCadenaDeTexto.toLowerCase();
    console.log(primeraCadenaDeTextoMinus); // -----> hello world, big world.()!¡?¿
    //Donde halla una coma la convertimos en espacio vacio, para que las palabras se guarden en el array sin comas
    let primeraCadenaDeTextoMinusSinSimbolos = primeraCadenaDeTextoMinus.replace(',', '');
    //simbolos guardados en un array para determinar que no son palabras en la cadena
    const simbolos = ['.', '(', ')', '!', '¡', '?', '¿'];
    for (let value of simbolos) {
        primeraCadenaDeTextoMinusSinSimbolos = primeraCadenaDeTextoMinusSinSimbolos.replace(value, '');
    }
    console.log(primeraCadenaDeTextoMinusSinSimbolos); // ----->  hello world big world
    //convertimos la cadena de string en un array de string que a separado palabra a palabra. el separador es espacio
    const arrayString = primeraCadenaDeTextoMinusSinSimbolos.split(' ');
    console.log(arrayString); // -----> [ 'hello', 'world', 'big', 'world' ]
    for (let value of arrayString) {
        if (value == palabra1)
            vecesPalabra1EstaEnLaCadena = vecesPalabra1EstaEnLaCadena + 1;
        if (value == palabra2)
            vecesPalabra2EstaEnLaCadena = vecesPalabra2EstaEnLaCadena + 1;
        if (value == palabra3)
            vecesPalabra3EstaEnLaCadena = vecesPalabra3EstaEnLaCadena + 1;
    }
    const message = `SOLUCION: ${palabra1} esta ${vecesPalabra1EstaEnLaCadena} ${vecesPalabra1EstaEnLaCadena > (1 || 0) ? "veces" : "vez"},
                                ${palabra2} esta ${vecesPalabra2EstaEnLaCadena} ${vecesPalabra2EstaEnLaCadena > (1 || 0) ? "veces" : "vez"}, 
                                ${palabra3} esta ${vecesPalabra3EstaEnLaCadena} ${vecesPalabra3EstaEnLaCadena > (1 || 0) ? "veces" : "vez"}`;
    return message;
};
console.log(detectorPalabras()); // --> SOLUCION: hello esta 1 vez, world esta 2 veces, big esta 1 vez
