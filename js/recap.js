// RIASSUNTO DELLE PUNTATE PRECEDENTI...
// per risolvere problemi e creare algoritmi abbiamo bisogno di memorizzare
// spesso valori intermedi, step intermedi in memoria -> utilizziamo le VARIABILI

// JS È UN LINGUAGGIO WEAKLY-TYPED ("debolmente tipizzato"): la creazione delle variabili
// non dipende dal TIPO di DATO che dovete metterci dentro!
// tutte le variabili in JS si creano con le parole "let" e "const": let crea variabili
// il cui valore è riassegnabile successivamente, mentre const crea delle "costanti", delle
// allocazione di memoria il cui valore viene DECISO una ed un'unica volta nella loro creazione.

let variable1 = 100 // tipo numerico, "number"
let variable2 = 'Gianni' // tipo caratteri alfanumerici, "string"
let variable3 = false // tipo logica booleana, "boolean"
// tipi particolari:
let variable4 // anche se non l'abbiamo dichiarato, variable4 HA un valore: "undefined"
let variable5 = null // esplicita assenza di valore, vuoto assoluto!

console.log('valore di variable1:', variable1) // vedrei nella console del browser il valore 100
console.log('quanto vale variable5:', variable5) // vedrei nella console del browser il valore null
// potete anche verificare il TIPO di una variabile
console.log('andiamo a vedere il tipo di variable4:', typeof variable4)

// le let sono riassegnabili
variable1 = 101 // ammesso!

// const
const myName = 'Stefano'
// myName = 'Roberto' // non si può fare!
console.log('ARRIVO QUI??')

// OPERATORI MATEMATICI
// + - * / %
let number1 = variable1 + 1 // 102
number1 = number1 * 2
console.log('number1 è 204?', number1)
let divisione = number1 / 50
// per arrotondare per difetto potete utilizzare
let risultatoAbbattutoPerDifetto = Math.floor(divisione) // 4
console.log('divisione vale', divisione)
let resto = number1 % 50 // ?? 4

// OPERATORI COMPARAZIONE
// delle operazioni logiche che restituiscono un valore booleano
// > < >= <= === !==

let risultato1 = risultatoAbbattutoPerDifetto === 4 // true?
console.log('risultato1', risultato1)

// AND (&&) e OR (||)
// ESEMPIO OR
// compro un mobile ikea: ora mi tocca montarlo!
let sonoCapaceDiMontarlo = false
let hoUnAmicoCapaceDiMontarlo = true

let riusciroAMontarlo = sonoCapaceDiMontarlo || hoUnAmicoCapaceDiMontarlo // true!

// ESEMPIO AND
// fare il caffè
let hoIlCaffèMacinato = true
let tazzinePulite = false

let miFaccioIlCaffe = hoIlCaffèMacinato && tazzinePulite // false, devo lavare le tazzine!

// &&
// SOLAMENTE se entrambe sono TRUE
// true && true -> true
// true && false -> false
// false && true -> false
// false && false -> false

// ||
// anche se solo UNA delle due affermazioni è true
// true || true -> true
// true || false -> true
// false || true -> true
// false || false -> false

// extra
// OPERATORE TERNARIO ("ternary operator")
// l'operatore ternario serve per assegnare un valore sulla base di una condizione

let age = 19

// variabile = condizione ? se sì : se no
let entroInDiscoteca = age >= 18 ? 'si' : 'no'
// entroInDiscoteca ha appena ricevuto un valore di "sì"

// verifico il totale da pagare per l'utente: se ha un carrello il cui contenuto è almeno 30 euro,
// le spese di spedizione sono gratuite e il totale "finale" sarà solamente l'ammontare del carrello;
// se invece NON raggiunge 30 euro di prodotti, dovrà oltre al carrello pagare una spedizione fissa di 5
let totaleCarrello = 17
let totaleDaPagare = totaleCarrello >= 30 ? totaleCarrello : totaleCarrello + 5
console.log('entroInDiscoteca', entroInDiscoteca)
