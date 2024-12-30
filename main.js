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
        {name: "Miki", scores: []},
        {name: "Ale", scores: []},
        {name: "Phil", scores: []},
        {name: "Salvo", scores: []}
    ],

    random_scores: function(){
        this.players.forEach(player => {
            for (let i = 1; i <= 10; i++) {
               player.scores.push(Math.floor(Math.random() * (10 - 1 +1) + 1));
            }
            // console.log(player.scores);            
        })
    },

    new_player: function(nome){
        let newPlayer = {name: nome, scores: []}
        for (let i = 1; i <= 10; i++) {
            newPlayer.scores.push(Math.floor(Math.random() * (10 - 1 +1) + 1));
         }
         this.players.push(newPlayer);
        //  console.log(newPlayer.scores);
    },     

    final_score: function(){
        this.players.forEach(player => {
            let tot = player.scores.reduce((acc, num)=> acc + num);
            player.totale = tot;
            // console.log(player.totale);
        })

        this.players.sort((a, b)=> b.totale - a.totale)
    },

    winner: function(){
        let vincitore = this.players[0];
        console.log(`Il vincitore è ${vincitore.name} con ${vincitore.totale} punti!`); 
    },

    chart: function(){
        console.log(`Classifica finale:`);
        this.players.forEach(player => {
            console.log(`${player.name}: ${player.totale} punti`);
        })
    }
}

bowling.random_scores();
bowling.new_player("Anna");
bowling.final_score();
bowling.winner();
bowling.chart();
