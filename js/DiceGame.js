document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.querySelector('.start'),
        dice_1 = document.querySelector('.dice_1'),
        dice_2 = document.querySelector('.dice_2'),
        win = document.querySelector('.win');


    function randomDice(){
        const firstDice = Math.floor(Math.random() * 6) + 1;
        const secondDice = Math.floor(Math.random() * 6) + 1;
        const thirdDice = Math.floor(Math.random() * 6) + 1;
        const fourthDice = Math.floor(Math.random() * 6) + 1;
        dice_1.innerHTML = `<img src="img/dice${firstDice}.png"> <img src="img/dice${secondDice}.png">`
        dice_2.innerHTML = `<img src="img/dice${thirdDice}.png"> <img src="img/dice${fourthDice}.png">`
    }
    randomDice();

    startBtn.addEventListener('click', () => {
        randomDice();
    });

});


// const firstPlayer = firstDice + secondDice;
// const secondPlayer = thirdDice + fourthDice;
// // function win(firstPlayer, secondPlayer ){
// //     if (firstPlayer > secondPlayer ) {
// //         win.innerHTML = 'Победа 1 игрока';
// //     } else {
// //         win.innerHTML = 'Победа 2 игрока';
// //     }
// // }