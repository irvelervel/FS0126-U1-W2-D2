// molto spesso nella stesura dei nostri ragionamenti il flusso delle operazioni non segue
// sempre una linea retta
// esempio carrello: se hai abbastanza elementi la spedizione è gratuita, altrimenti si aggiunge al totale

// per ramificare il nostro codice ed inserire dei blocchi in maniera "condizionale", si utilizza
// il costrutto "if"

const prezzoCarrello = 20
const speseSpedizione = 5
const sogliaSpedizioneGratuita = 25

let totaleDaPagare = prezzoCarrello

// ora bisogna calcolare se l'utente deve anche aggiungere le spese di spedizione al totale
// le spese di spedizione vanno aggiunte se il totale NON raggiunge la sogliaSpedizioneGratuita

// questa riga NON VA ESEGUITA SEMPRE!
// quindi va inserita nel codice in modo CONDIZIONALE
if (prezzoCarrello < sogliaSpedizioneGratuita) {
  // questo blocco di graffe verrà eseguito SOLO se la condizione dell'if è TRUE
  totaleDaPagare = totaleDaPagare + speseSpedizione // aggiungo al totale le spese di spedizione
  console.log('Ho aggiunto le spese di spedizione!')
}

console.log('Il totale da pagare è', totaleDaPagare)

// ---------------

const myAge = 26

if (myAge >= 18) {
  // se la condizione torna true
  console.log('hai ' + myAge + ' anni, puoi entrare in discoteca!')
} else {
  // se la condizione torna false
  console.log('hai ' + myAge + ' anni, sei troppo piccolo!')
}

// solo se myAge è maggiore o uguale a 10
// solo se myAge è MINORE di 15
if (myAge >= 10 && myAge < 15) {
  // 10
  // 11
  // 12
  // 13
  // 14
  console.log('ok il prezzo è giusto!')
}

const studentName = 'Gianni'
const studentGrade = 15

if (studentName === 'Mario' || studentGrade >= 18) {
  console.log("HAI PASSATO L'ESAME")
} else {
  console.log('Che sfiga, ritenta al prossimo appello!')
}

// -----
const coloreOcchi = 'Marroni'

if (coloreOcchi === 'Azzurri') {
  console.log('Che begli occhi azzurri che hai!')
} else if (coloreOcchi === 'Verdi') {
  console.log('Che begli occhi verdi che hai!')
} else {
  // qui entrano gli occhi marroni, gialli, bianchi
  console.log(
    'Il tuo colore degli occhi non era tra quelli a cui volevo fare i complimenti',
  )
}
