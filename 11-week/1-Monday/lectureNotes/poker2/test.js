// let Hand = require('pokersolver').Hand;

// // var hand = Hand.solve(['Ad', 'As', 'Jc', 'Th', '2d', 'Qs', 'Qd']);
// // console.log(hand.name); // Two Pairls
// // console.log(hand.descr); // Two Pair, A's & Q's

// var hand1 = Hand.solve(['Ad', 'As', 'Jc', 'Th', '2d', '3c', 'Kd']);
// var hand2 = Hand.solve(['Ad', 'As', 'Jc', 'Th', '2d', 'Qs', 'Qd']);
// var winner = Hand.winners([hand1, hand2]); // hand2

// console.log(winner);


// Players
//     - id(4)
//     - name
//     - level
//     - wallet(how money player has)


// Game
//     - ID(5)
//     - name
//     - TimeStamp


// GameRecord
// id
// gameID
// playerID(1)
// winnings


// 1, 20, 4, 50
// 2, 100, 4, -20
// 3, 101, 4, -75
// 4, 100, 6, 100
// 5, 101, 6, 75


let db = require('./models');


db.user.update({
    name: 'Diego'
},
    {
        where: {
            name: 'Richard'
        }
    })
    .then(updatedRecord => {
        console.log(updatedRecord);
    })

db.user.findAll({ where: { name: "Richard" } })
    .then(results => {
        //results array of objects 
        //[{}, {}, {}]

        let user = results[0];

        user.name = "Diego";
        user.save()
            .then(() => {
                console.log('done saving');
            })

    })













