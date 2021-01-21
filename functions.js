/* Opdracht 1 */
// Schrijf een functie die drie parameters verwacht en deze drie getallen bij elkaar optelt en teruggeeft.
// ---- Verwachte uitkomsten:
// 3, 4, 5 geeft 12
// 11, 3, 9 geeft 23
function calculation(one, two, three) {
    return  one + two + three;
}
console.log(calculation(3,4,5));
console.log(calculation(11,3,9))

/* Opdracht 2 */
// Schrijf een functie die twee strings verwacht en deze aan elkaar geplakt teruggeeft.
// Je mag hier geen String Object methoden voor gebruiken.
// ---- Verwachte uitkomsten:
// "abra", "cadabra" geeft "abracadabra"
function wordsCombined (a, b) {
    return a+b;
}
console.log(wordsCombined("abra","cadabra"));


/* Opdracht 3 */
// Schrijf een functie die twee parameters verwacht: een woord en een karakter
// De functie omwikkelt het woord met het karakter en geeft dit terug
// ---- Verwachte uitkomsten:
// "bril", "*" geeft "*bril*"
// "beep", "_" geeft "_beep_"
// "kaas", "Q" geeft "QkaasQ"

//EERSTE POGING
// let firstWord = "bril";
// const firstCharacter ="*";
//
// let secondWord ="beep";
// const secondCharacter="_";
//
// let thirdWord= "kaas";
// const thirdCharacter ="Q";
// function wordWithCharater(word, Charater) {
//     return word + Charater;
// }
// console.log(wordWithCharater(firstCharacter,firstWord)+firstCharacter [0])
// console.log(wordWithCharater(secondCharacter,secondWord)+secondCharacter [0])
// console.log(wordWithCharater(thirdCharacter,thirdWord)+thirdCharacter [0])

function wordsWithCharaters (character, word) {
    return character + word + character;
}
console.log(wordsWithCharaters("*", "bril"))
console.log(wordsWithCharaters( '"', "beep"))
console.log(wordsWithCharaters("Q", "kaas"))

/* Opdracht 4 */
// Schrijf een functie die een array van strings verwacht. De functie geeft
// alle strings aan elkaar geplakt terug. Je mag hier geen array- of string methoden
// voor gebruiken.
// ---- Verwachte uitkomsten:
// ["abra", "cadabra"] geeft "abracadabra"
// ["a", "b", "c"] geeft "abc"

// EERSTE POGING
// const magicword = ["abra", "cadabra"]
// function arrayOfStrings(word) {
//     return [word];
// }
// console.log(arrayOfStrings(magicword))

//POGING TWEE
// function arrayOfString (wordone, wordtwo, wordthree) {
// //     return [wordone + wordtwo + wordthree];
// // }
// // console.log(arrayOfString("abra", "cadabra", ""));
// // console.log(arrayOfString("a", "b", "c"));

function arrayOfWords (wordThatHaveToBeCombined) {
    let output = "";

    for (let i = 0; i < wordThatHaveToBeCombined.length; i++) {
        output += wordThatHaveToBeCombined[i];
    }
    return output;
}
console.log(arrayOfWords(["abra", "cadabra"]));
console.log(arrayOfWords(["a", "b", "c"]));

/* Opdracht 5 */
// Schrijf een functie die een array van strings verwacht en een gezamelijke groet teruggeeft
// ---- Verwachte uitkomsten:
// ["Nick", "Nova", "Mitchel", "Arjen"] geeft "Hoi Nick, Nova, Mitchel en Arjen!"
// ["Piet", "Henk"] geeft "Hoi Piet en Henk!"
// ["A", "B", "C", "D", "E", "F"] geeft "Hoi A, B, C, D, E en F!"

//MIJN OPLOSSING
const namesTeachers = ["Nick", "Nova", "Mitchel", "Arjen"];
namesTeachers.splice(3, 0, "en")
const namesRandom = ["Piet", "Henk"];
namesRandom.splice(1,0, "en")
const greet = "Hoi ";
const letters = ["A", "B", "C", "D", "E", "F"];
letters.splice(5, 0, "en")
const exclamationMark = "!"
function combinedString(greet, names) {
    return greet + names + exclamationMark;
}
console.log(combinedString(greet, namesTeachers));
console.log(combinedString(greet, namesRandom));
console.log(combinedString(greet, letters));


console.log("********************************************************************************")
// VRAAG WAAR KOMEN MIJN KOMMA'S VANDAAN?

//DOCENTEN OPLOSSING :D
function greeting(stringsArray) {
    let greeting = "Hoi ";

    for (let i = 0; i < stringsArray.length; i++) {
        // als dit de laatste entry is, voeg dan het uitroepteken toe
        if (i === stringsArray.length - 1) {
            // de return zorgt ervoor dat er niet meer naar de andere if-statements gekeken wordt
            return greeting = greeting + " en " + stringsArray[i] + "!";
        }
        // als de array maar twee namen bevat of we zijn bij de één-na-laatste naam, voeg dan alleen de naam toe
        if (stringsArray.length === 2 || i === stringsArray.length - 2) {
            greeting = greeting + stringsArray[i];
        } else {
            // in andere alle gevallen voegen we een komma en spatie toe
            greeting = greeting + stringsArray[i] + ", ";
        }
    }

    return greeting;
}
console.log(greeting(["Nick", "Nova", "Mitchel", "Arjen"]));
console.log(greeting(["Piet", "Henk"]));
console.log(greeting(["A", "B", "C", "D", "E", "F"]));