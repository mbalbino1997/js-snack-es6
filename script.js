// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

const bikeArray= [
    {
        nome: "bici1",
        peso: 10
    },
    {
        nome: "bici1",
        peso: 4
    },
    {
        nome: "bici3",
        peso: 14
    }
]
let lightestBike = bikeArray[0];

for(let i=0; i<bikeArray.length-1; i++) {
    if(bikeArray[i+1].peso<lightestBike.peso) {
        lightestBike=bikeArray[i+1];
    }
}

console.log(lightestBike);

// Snack2
// Creare un array di oggetti di squadre di calcio.
//  Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const footballTeams = [
    {
        nome: "juve",
        punti: 0,
        "falli-subiti":0
    },
    {
        nome: "milan",
        punti: 0,
        "falli-subiti":0
    },
    {
        nome: "inter",
        punti: 0,
        "falli-subiti":0
    }
]
let newArrayTeams = [];
for(let i =0;i<footballTeams.length;i++) {
    footballTeams[i].punti=Math.floor(Math.random()*10)+1;
    footballTeams[i]["falli-subiti"]=Math.floor(Math.random()*10)+1;

    newArrayTeams[i]= {
        nome:footballTeams[i].nome,
        "falli-subiti":footballTeams[i]["falli-subiti"]
    }
}


console.log(newArrayTeams);

// Snack 3 (Bonus)
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
const arrayFull=[1,34,6,12,65,23,3,2,75,24,53,67];
const a = 5;
const b = 10;

console.log(newArrayBetween(arrayFull,a,b));


/**
 * 
 * @param {Array} array 
 * @param {number} numberA 
 * @param {number} numberB 
 * @returns {Array}
 */
function newArrayBetween(array,numberA,numberB) {
    Math.max(numberA,0);
    Math.min(numberB,array.length);
    if(!Array.isArray(array)) {
        return console.error("passare un arrai nel primo parametro");
        
    }
    if(isNaN(numberA) || isNaN(numberB)) {
        return console.error("il secondo ed il terzo parametro devono essere numeri");
    }
    const arraySmall = [];
    const lengthBetween = numberB-numberA+1;
    for (let i= 0; i<lengthBetween;i++) {
        arraySmall.push(array[i+numberA]);
    }
    return arraySmall;
}