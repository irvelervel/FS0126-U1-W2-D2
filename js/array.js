// GLI ARRAY
// Un array è una struttura dati complessa di JS.
// Permette di racchiudere sotto un unico nome, una unica variabile una serie potenz. infinita di VALORI
// occhio! gli oggetti erano una serie di COPPIE (chiave:valore), gli array sono SOLO I VALORI!

const nomi = ['Stefano', 'Noemi', 'Roberto', 'Camilla']
const numeriPreferiti = [3, 7, 10, 50, 100]
const valoriBooleani = [true, true, false]
const oggetti = [{ age: 20 }, { age: 18 }, { age: 16 }]

// anche se è poco utile/pratico, si possono fare anche array "misti"
const misto = ['giangiorgio', 35, false, 'sio', { scottecs: true }]

// in un array gli elementi NON sono dotati di CHIAVI (come per gli oggetti)
// quindi l'unica cosa che differenzia gli elementi (e ci permette di prelevarne uno oppure un altro)
// è la loro POSIZIONE all'interno dell'array!
// es.
// 'Stefano' è il PRIMO elemento di nomi -> INDICE 0
// 'Noemi' è il SECONDO elemento di nomi -> INDICE 1
// 'Roberto' è il TERZO elemento di nomi -> INDICE 2
// 'Camilla' è il QUARTO elemento di nomi -> INDICE 3

// Gli array in JS sono zero-indexed based.
// Quale indice avrà il PRIMO elemento di un qualsiasi array? -> 0
// Posso sapere QUANTO È LUNGO un array? ogni array ha una proprietà che si chiama "length"
console.log(nomi.length) // 4
console.log(valoriBooleani.length) // 3
console.log(numeriPreferiti.length) // 5
// Posso sapere qual è la posizione dell'ULTIMO elemento di un array? sarà sempre LENGTH - 1

// per estrapolare un elemento da un array utilizzo -> nomeArray[indice]
numeriPreferiti[2] // terzo elemento di numeriPreferiti --> 10
nomi[0] // 'Stefano'
nomi[1] // 'Noemi'
nomi[2] // 'Roberto'
nomi[3] // 'Camilla'

console.log(nomi)
console.log(nomi[3]) // 'Camilla'

console.log(nomi[4]) // undefined, non esiste un ipotetico 5° elemento di nomi!

// voglio l'ultimo elemento di "nomi", ma non so che indice ha?
nomi[nomi.length - 1] // <- questo è un modo per trovare SEMPRE l'ultimo elemento di un qualsiasi array

// MODIFICO GLI ELEMENTI DELL'ARRAY
nomi[0] = 'Cristian'
nomi[3] = 'Cristina'

// È ANCHE POSSIBILE AGGIUNGERE/RIMUOVERE ELEMENTI DAGLI ARRAY
const pets = [
  'gatto', // 0
  'cane', // 1
  'criceto', // 2
  'pescerosso', // 3
  'tarantola', // 4
  'salamandra', // 5
]

pets.length // 6

// METODI DEGLI ARRAY
// AGGIUNGO UN ELEMENTO IN CODA ALL'ARRAY (alla fine)
pets.push('rinoceronte')
// ora pets ha lunghezza 7, e pets[6] è diventato "rinoceronte"
// AGGIUNGO UN ELEMENTO IN CIMA ALL'ARRAY (all'inizio)
pets.unshift('topo')
// l'array è diventato ['topo', 'gatto', 'cane', 'criceto', 'pescerosso', 'tarantola', 'salamandra', 'rinoceronte]
// ora la lunghezza length è 8
// RIMUOVIAMO UN ELEMENTO IN CODA ALL'ARRAY (alla fine)
pets.pop()
// RIMUOVIAMO UN ELEMENTO IN CIMA ALL'ARRAY (all'inizio)
pets.shift()
// pop() e shift() non hanno bisogno di "argomento", perchè uno toglie dal fondo e uno toglie dall'inizio

// E NEL MEZZO?
pets.splice(3, 1)
// splice vi richiede la posizione dalla quale cominciare a rimuovere gli elementi
// voglio togliere "pescerosso"? bene, ha indice 3. Quindi faccio splice(3, 1) perchè 1 fa capo
// al numero di elementi che voglio eliminare da quella posizione

// INVERTO UN ARRAY
pets.reverse() // modifica l'array su cui lo invocate!
