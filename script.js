//Bienvenida a Javascript básico parte II, donde veremos condicionales y bucles.

//En el archivo index.html que tienes abierto en el navegador (preferiblemente chrome o firefox) vamos a trabajar con la consola, abre tu inspector y en la pestaña de consola, mira si puedes ver el mensaje escrito abajo.

console.log('Hola soy tu consola y juntas vamos a aprender Javascript')

//Si has encontrado el mensaje puedes continuar con los ejercicios

//Arrays

//Ejercicio 1: Crea una constante llamada postres con un tipo de dato array que contiene los siguientes elementos: helado, tarta, pastel e imprímelo en la consola. 

//Escribe tu código aquí
const postres = ["helado", "tarta", "pastel"];
console.log(postres);

//Objetos

//Ejercicio 2: Crea una constante con un tipo de dato objeto llamado coder que contengan dos propiedades, nombre y edad e imprímelo en la consola.

//Escribe tu código aquí
const coder = {
    nombre: "Lluis",
    Edad: 25,
}
console.log(coder);

//Ejercicio 3: Busca como imprimir en consola el tipo de dato de cada variable que hemos creado.

//Escribe tu código aquí
console.log(postres[0],postres[1],postres[2]);
console.log(coder.nombre,coder.Edad);

//CONDICIONALES

//Ejercicio 4: Escribe un condicional if/else que imprima en la consola 'Eres mayor de edad' cuando la constante age tenga el valor correspondiente, si no es así, debe imprimir 'No eres aún mayor de edad'

const age = 18
//Escribe tu código aquí
if (age > 18) {
console.log("Eres mayor de edad"); 
} else {
console.log("No eres mayor de edad")
}

 
//Ejercicio 5: Cambia el valor de age a 12 para mirar el resultado del ejercicio anterior.
    if (age > 12) {
    console.log("Eres mayor de edad"); 
    } else {
    console.log("No eres mayor de edad")
    }

//Ejercicio 6: Escribe un condicional if/else que lea la constante pet y si es un perro, que imprima en la consola "Tengo un perro", si es un gato, que imprima en la consola "Tengo un gato", si es un pájaro, que imprima en la consola "Tengo un pájaro" y si no es ninguno de los 3 que imprima "No tengo una mascota convencional"

let pet = "serpiente";
//Escribe tu código aquí
if (pet === "perro") {
    console.log("Tengo un perro");
}
else if (pet === "gato") {
    console.log("Tengo un gato");
}
else if (pet === "pajaro")  {
    console.log("Tengo un pajaro");
}
else{
    console.log("No tengo mascota convencional");
}
    




//Ejercicio 7: cambia el valor de pet a "serpiente" y mira el resultado en consola para comprobar que tu código funciona bien.

pet = "gato";
//Escribe tu código aquí
if (pet === "perro") {
    console.log("Tengo un perro");
}
else if (pet === "gato") {
    console.log("Tengo un gato");
}
else if (pet === "pajaro")  {
    console.log("Tengo un pajaro");
}
else{
    console.log("No tengo mascota convencional");
}

//Ejercicio 8: Haz el mismo ejercicio 3, pero con el condicional switch.

//Escribe tu código aquí
 pet = "perro"; 
switch (pet) {
    case "perro":
    console.log("Tengo un perro");
break;
case "gato": 
    console.log("Tengo un gato");
break;
case "pajaro":  
    console.log("Tengo un pajaro");
break;
default:
    console.log("No tengo mascota convencional");
}

//Ejercicio 9: Usando un operador ternario, escribe un programa que lea la constante weather e imprima en consola si es soleado "Me vestiré con un vestido" y si no es así que imprima "Me vestiré con pantalón"


let weather = "soleado"
let resultado = (weather == "soleado") ? "Me vestiré con un vestido" : "Me vestiré con pantalón";
console.log(resultado)

//Ejercicio 10: cambia el valor de weather a "frío" y mira el resultado en consola para comprobar que tu código funciona bien.
 weather = "frio"
  resultado = weather == "frio" ? "Me vestiré con un vestido" : "Me vestiré con pantalón";
console.log(resultado) 

//Ejercicio 11: Escribe un programa que al darle la constante 'value' imprima en consola "Es un número" cuando el valor sea de tipo number, "Es un string" cuando el valor sea de tipo string o si no es ni uno ni otro que imprima "No es ni número ni string". Puedes hacerlo con cualquier tipo de condicional.

const value = "1"

//Escribe tu código aquí

 if (typeof value === "number") {
 console.log("Es un numero");
}

else if (typeof value === "string") {
console.log("Es un string");
}
else {
console.log("No es ni número ni string");
}

//BUCLES

//Ejercicio 12: Imprime en consola una lista del 0 al 10 con el bucle for

//Escribe tu código aquí
const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

//Ejercicio 13: Con un bucle for in imprime en pantalla todos los nombres, apellidos y su aporte a la sociedad de las programadoras de la historia contenidas en el array llamado 'programmers', Deberás imprimir el índice y la información de cada una de ellas de la siguiente manera: '0: Ada Lovelace, su aporte fue la máquina analítica'. 

const programmers = [
    {
        name: 'Ada',
        lastname: 'Lovelace',
        knowledge: 'la máquina analítica'
    },
    {
        name: 'Margaret',
        lastname: 'Hamilton',
        knowledge: 'el programa espacial Apolo'
    },
    {
        name: 'Grace',
        lastname: 'Hopper',
        knowledge: 'el lenguaje Cobol'
    },
    {
        name: 'Hedy',
        lastname: 'Lamarr',
        knowledge: 'el wifi'
    }     

]

//Escribe tu código aquí
for (let i in programmers) {
    console.log(`${i}: ${programmers[i].name} ${programmers[i].lastname}, su aporte fue ${programmers[i].knowledge}`);
}


//Ejercicio 14: Con un bucle for of imprime en consola "Hola, mi nombre es ... " y reemplaza los tres puntos con cada nombre del array dado.

const names = ['Rocío', 'Cris', 'Antía', 'Judith', 'Noelia']

//Escribe tu código aquí

for (const name of names) {
    console.log(`Hola, mi nombre es ${name}`);
}

//Ejercicio 15: Con un bucle while imprime en consola una lista del 1 al 5.

//Escribe tu código aquí
let numeral = 1;
while (numeral <=5) {
console.log(numeral);
numeral++;    
}

//Ejercicio 16: Realiza el mismo ejercicio anterior pero con un bucle do while.

//Escribe tu código aquí
let num = 1;
do {
    console.log(num);
    num++;
}
while (num <=5); 

//Ejercicio 17: Saludo Personalizado
//Crea una función llamada saludar que tome un parámetro llamado nombre y devuelva un saludo personalizado. Luego, llama a la función con diferentes nombres y muestra el resultado en la consola.

//Escribe tu código aquí
function saludar(apodos)
{
    return "Hola," + apodos + "!Como estás?";
}


console.log(saludar("Rocio"));
console.log(saludar("Cris"));
console.log(saludar("Antia"));
console.log(saludar("Judith"));




//Ejercicio 18: Calcular el Área de un Rectángulo
//Crea una función llamada calcularAreaRectangulo que tome dos parámetros (ancho y alto) y devuelva el área del rectángulo. Luego, llama a la función con diferentes valores de ancho y alto y muestra el resultado en la consola.

//Escribe tu código aquí
function calcularAreaRectangulo(width, height) {
    let area = width * height;
    return area;
  }
  let width = 5;
  let height = 10;
  
 let result = calcularAreaRectangulo(width, height);
 console.log(result);