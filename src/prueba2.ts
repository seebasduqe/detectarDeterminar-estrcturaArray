
//Arrays para evaluar la funcion
const elementosAgrupados1 : string[] = ['()', '()', '()', '{[][]}', '{([]{})}'];
const elementosAgrupados2 : string[] = ['([(]{)', '})'];
const elementosAgrupados3 : string[] = ['()', '()', '()', '{[hola][onyx]}', '{([juan]{})}'];

//Funcion principal
const determinarEstructuracionCadena = ( elementosAgrupados : string[] ) : string => {

    let mismoAbiertoMismoCerrado : boolean[] = [];

    //Recorro el array para evaluar elemento a elemento
    for(let elementoAgrupado of elementosAgrupados){

        //Vuelvo el elemento string en array para evaluar primer y ultimo caracter
        const elementoAgrupadoSiendoArray : string[] = elementoAgrupado.split('');

        //Lo mando a la funcion que saco el primer y ultimo caracter
        // y determina si el mismo signo que abre es el mismo que cierra
        const booleanoRecibidoDeFuncion : boolean = determinarPrimerUltimoCaracterDelString(elementoAgrupadoSiendoArray);

        //Lo guardamos en un array de booleanos para determinar si hay un solo false significa que una no cumple
        mismoAbiertoMismoCerrado.push(booleanoRecibidoDeFuncion);
    }

    console.log(` De ${elementosAgrupados} ---->  ${mismoAbiertoMismoCerrado}`);
    /* De elementos agrupados estos cumplen y no cumple, result ----->
    De (),(),(),{[][]},{([]{})} ---->  true,true,true,true,true
    De ([(]{),}) ---->  true,false
    De (),(),(),{[hola][onyx]},{([juan]{})} ---->  true,true,true,true,true
    */

    //Ahora mandamos el array de booleanos y el array de elementos para determinar si todo el array cumple o no
    const respuesta : string = validarArrayMismoAbieroMismoCerrado(mismoAbiertoMismoCerrado, elementosAgrupados);

    return respuesta;
}
//Funcion que evalua elemento del array principal y determina si el elemento abre y cierra con el mismo sigo agrupacion
const determinarPrimerUltimoCaracterDelString = (elementoAgrupadoSiendoArray: string []) : boolean => {
    let mismoAbiertoMismoCerrado : boolean = false;
    const indiceUltimoElemento : number = elementoAgrupadoSiendoArray.length- 1;
    const primerCaracterDelArray = elementoAgrupadoSiendoArray[0];
    const ultimoCaracterDelArray = elementoAgrupadoSiendoArray[indiceUltimoElemento];

    //despues determino si el mismo que abrio es el mismo que cerro

    if(
        ( (primerCaracterDelArray == '(') && (ultimoCaracterDelArray == ')') ) ||
        ( (primerCaracterDelArray == '{') && (ultimoCaracterDelArray == '}') ) ||
        ( (primerCaracterDelArray == '[') && (ultimoCaracterDelArray == ']') )
    ){
        mismoAbiertoMismoCerrado = true;
    }

    return mismoAbiertoMismoCerrado;

}

//Funcion que recibe un array de booleanos y si recibe algun false, retorna que no cumple el elemento agrupado
const validarArrayMismoAbieroMismoCerrado = (mismoAbiertoMismoCerrado : boolean[], elementos: string[]) : string => {
    let validarArrayMismoAbiertoMismoCerrado : boolean = false;
    validarArrayMismoAbiertoMismoCerrado = mismoAbiertoMismoCerrado.includes(false);
    let respuesta : string = '';
    if(validarArrayMismoAbiertoMismoCerrado){
        respuesta = `El array ${elementos} No cumple con la estructura`;
    } else {
        respuesta = `El array ${elementos} si cumple con la estructura`;
    }
    return respuesta;
}




const solucion1 : string =  determinarEstructuracionCadena(elementosAgrupados1);
const solucion2 : string = determinarEstructuracionCadena(elementosAgrupados2);
const solucion3 : string = determinarEstructuracionCadena(elementosAgrupados3);

console.log(`Solucion ----> \n ${solucion3}, \n ${solucion2}, \n ${solucion3}`);

// result --> Solucion ---->
//  El array (),(),(),{[hola][onyx]},{([juan]{})} si cumple con la estructura,
//  El array ([(]{),}) No cumple con la estructura,
//  El array (),(),(),{[hola][onyx]},{([juan]{})} si cumple con la estructura