let boxes = document.querySelectorAll(".box")


let turn = [true, false];

let turnRand = turn[Math.floor(Math.random() * turn.length)];



const winPatterns = [

    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

]

const checkWinner = () => {
    for (pattern of winPatterns) {
        let b1 = document.getElementById(pattern[0]).querySelector('h1')
        let b2 = document.getElementById(pattern[1]).querySelector('h1')
        let b3 = document.getElementById(pattern[2]).querySelector('h1')
        if (b1.textContent !== "" && b1.textContent === b2.textContent && b2.textContent === b3.textContent) {
            let winner = document.querySelector(".heading")
            winner.textContent = `the winner is ${b1.textContent}`
            boxes.forEach(box => box.style.pointerEvents = "none");

        }
    }
}
boxes.forEach(

    (box) => {

        box.addEventListener('click', () => {
            console.log("clicked");
            text = box.querySelector('h1')
            if (turnRand) {
                text.textContent = "O"
                text.style.color = '#ff9f1c'
                turnRand = false;
            } else {
                text.textContent = "X"
                text.style.color = '#e71d36'
                turnRand = true;
            }
            box.style.pointerEvents = "none"
            checkWinner()
        })

    }


)


