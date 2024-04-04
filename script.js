const min = 1;
const max = 6;

function rollDice() {
    let randomeNum = Math.floor(Math.random() * (max - min + 1)) + min;
    let side = document.getElementById("side");
    switch (randomeNum) {
        case 1:
            side.src = "sides/dice-six-faces-one.svg"
            break;

        case 2:
            side.src = "sides/dice-six-faces-two.svg"
            break;

        case 3:
            side.src = "sides/dice-six-faces-three.svg"
            break;

        case 4:
            side.src = "sides/dice-six-faces-four.svg"
            break;

        case 5:
            side.src = "sides/dice-six-faces-five.svg"
            break;
            
        case 6:
            side.src = "sides/dice-six-faces-six.svg"
            break;
    }
}