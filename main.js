// Crea un oggetto bowling con le seguenti caratteristiche:
// una proprietà che comprenda una lista di giocatori con un nome e i relativi punteggi
// diverse funzionalità tra cui:
// creare 10 punteggi casuali per ogni giocatore:
// Suggerimento: questo metodo dovra’ ciclare tutti i giocatori, presenti nell’oggetto bowling, e aggiungere ad ogni proprieta’ scores, dieci punteggi casuali ad ogni giocatore
// Per generare un punteggio casuale da 1 a 10 → Math.floor(Math.random() * (10 - 1 +1) + 1)
// trovare il punteggio finale per ogni giocatore:
// Suggerimento: ordinare l’array in ordine Decrescente (Attenzione! E’ un array di oggetti: Array.prototype.sort() - JavaScript | MDN )
// aggiungere un nuovo giocatore e creare 10 punti casuali anche per lui
// determinare il vincitore

// EXTRA:
// Crea un metodo per stilare la classifica finale dei giocatori

// DATI DI PARTENZA:
// let bowling = {
//     'players': [
//         {'name': 'Livio', 'scores': []},
        // {'name': 'Paola', 'scores': []},
//         {'name': 'Filippo', 'scores': []},
//         {'name': 'Giuseppe', 'scores': []}
//     ],
//     ...
// }

let bowling = {

    players: [
        {name: "Miki", scores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]},
        {name: "Ale", scores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]},
        {name: "Phil", scores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]},
        {name: "Salvo", scores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}
    ],

    random_scores: function(){

    },

    final_score: function(){},
}
