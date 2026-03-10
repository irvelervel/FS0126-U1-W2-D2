const studenti = [
  {
    nome: 'Luca', // console.log(studenti[0].nome)
    eta: 21,
    corsi: ['Matematica', 'Fisica', 'Programmazione'],
    indirizzo: {
      citta: 'Milano',
      cap: '20100', // studenti[0].indirizzo.cap
      via: 'Via Roma 10',
    },
    esami: [
      { materia: 'Matematica', voto: 28 },
      { materia: 'Fisica', voto: 30 },
      { materia: 'Programmazione', voto: 27 },
    ],
  },
  {
    nome: 'Giulia',
    eta: 23, // studenti[1].eta
    corsi: ['Biologia', 'Chimica', 'Statistica'], // Chimica -> studenti[1].corsi[1]
    indirizzo: {
      citta: 'Torino',
      cap: '10100',
      via: 'Corso Francia 45',
    },
    esami: [
      { materia: 'Biologia', voto: 30 },
      { materia: 'Chimica', voto: 26 },
      { materia: 'Statistica', voto: 29 }, // 'Statistica' -> studenti[1].esami[2].materia
    ],
  },
  {
    nome: 'Marco',
    eta: 22,
    corsi: ['Economia', 'Marketing'], // Marketing -> studenti[2].corsi[1]
    indirizzo: {
      citta: 'Roma',
      cap: '00100',
      via: 'Via Appia 88',
    },
    esami: [
      { materia: 'Economia', voto: 25 }, // voto -> studenti[2].esami[0].voto
      { materia: 'Marketing', voto: 28 },
    ],
  },
]

console.log(studenti[1].esami[2].materia) // "Statistica"
