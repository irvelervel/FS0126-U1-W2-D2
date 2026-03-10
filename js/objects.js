console.log('FOGLIO JS FUNZIONANTE!')
// ...giusto per controllare di aver collegato correttamente lo script!

// PARLIAMO ORA DI STRUTTURE DATI COMPLESSE

// OGGETTI
// nella programmazione un "oggetto" è la controparte digitale di un oggetto IRL ("in real life")
// così come nella vita reale, un oggetto digitale è una singola entità composta di diverse
// caratteristiche ("proprietà")

// un oggetto si dichiara con un bel paio di parentesi GRAFFE
const sedia = {
  // all'interno di questo blocco di graffe si inseriscono TUTTE le PROPRIETÀ di questo oggetto
  // potete inserire da 0 a infinite proprietà
  // tutte le proprietà sono delle COPPIE "chiave:valore"
  // in una coppia chiave:valore l'operatore di assegnazione non è =, ma è :
  // tutte le coppie sono separate tra di loro tramite virgola
  // i valori delle chiavi possono essere di qualsiasi tipo, numeri, stringhe, booleani, undefined, ...
  // ... null, ALTRI OGGETTI
  colore: 'nero',
  numeroRoute: 4,
  reclinabile: true,
}

const lampada = {
  materiale: 'ottone',
  temperaturaLuce: '3500k',
  aNorma: true,
  interruttore: true,
  prezzo: {
    qty: 35,
    curr: 'euro',
  },
}

console.log(lampada)
// e se volessi ottenere la stringa "ottone"? dovrei accedere alla chiave materiale:
// CI SONO DUE MODI PER ACCEDERE ALLE PROPRIETÀ DEGLI OGGETTI
// 1) "DOT NOTATION"

console.log('il materiale della lampada è', lampada.materiale) // 'ottone'
console.log('la lampada è accesa?', lampada.interruttore) // 'true'

// qty??
console.log(lampada.prezzo.qty) // 35

// 2) "SQUARE BRACKETS NOTATION"

lampada['materiale'] // 'ottone'

let value = 'prezzo'
lampada.value // undefined
lampada[value] // true
// la square brackets notation si utilizza quando si vuole accedere alla proprietà di un oggetto
// ma non si ha magari il nome della chiave! si ha però una variabile il cui VALORE è il nome della chiave!
// perchè lampada.value non esiste, io voglio lampada."VALOREDIVALUE"
