const stringDePalabrasAdetectarEjemplo : string = "hello world, big WoRld.()!¡?¿";

//Funcion principal
const detectorDePalabras = (stringPalabrasAdetectar : string) : string => {

    let respuestaArray : string[] = [];

    //Primero convierto el string en minus para no generar problemas con letras en mayuscula

    const stringPalabrasAdetectarMinus : string = stringPalabrasAdetectar.toLowerCase();
    // result ---> hello world, big world.()!¡?¿

    //Ahora saco los caracteres especiales como: ,.()!¡?¿ para que no halla problema al detectar palabras
    const simbolos : string[] = [',' ,'.', '(', ')', '!', '¡', '?' ,'¿']
    let stringPalabrasAdetectarMinusSinSimbolos : string = stringPalabrasAdetectarMinus;

    for(let simbolo of simbolos){
        stringPalabrasAdetectarMinusSinSimbolos = stringPalabrasAdetectarMinusSinSimbolos.replace(simbolo,'');
    }
    // result ---> hello world big world

    //Ahora encuentro las palabras del string envolviendolas en un array
    const stringSiendoArray : string[] = stringPalabrasAdetectarMinusSinSimbolos.split(' ');
    // result --> [ 'hello', 'world', 'big', 'world' ]

    for(let palabra of stringSiendoArray){

        let cantidad : number = 0;
        let indexP : number = stringSiendoArray.indexOf(palabra);
        while (indexP !=-1){
            cantidad++;
            indexP = stringSiendoArray.indexOf(palabra, indexP+1);
        }

        const palabraCantidad : string = `\n La palabra ${palabra} esta ${cantidad} ${cantidad == 1 ? 'vez' : 'veces'}`;
        // result --> La palabra hello esta 1 vez
        //
        //  La palabra world esta 2 veces
        //
        //  La palabra big esta 1 vez
        //
        //  La palabra world esta 2 veces
        respuestaArray.push(palabraCantidad);
    }

    // result --> [
    //   '\n La palabra hello esta 1 vez',
    //   '\n La palabra world esta 2 veces',
    //   '\n La palabra big esta 1 vez',
    //   '\n La palabra world esta 2 veces'
    // ]

    //Ahora deseo borrar de la respuesta los elementos que se repiten porque estan mas de una vez
    const respuestaArrayCorregida : string[] = respuestaArray.filter(
        (item, index) => {
            return respuestaArray.indexOf(item) === index;
        }
    );

    // result --> [
    //   '\n La palabra hello esta 1 vez',
    //   '\n La palabra world esta 2 veces',
    //   '\n La palabra big esta 1 vez'
    // ]


    const respuesta : string = `SOLUCION ----->  ${respuestaArrayCorregida}`;
    return respuesta;
}


//Ejecuto funcion pasandole el string del ejemplo
console.log(detectorDePalabras(stringDePalabrasAdetectarEjemplo));
// result --> SOLUCION ----->
//  La palabra hello esta 1 vez,
//  La palabra world esta 2 veces,
//  La palabra big esta 1 vez




