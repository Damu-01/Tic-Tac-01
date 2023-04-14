flag = true;
var state = [1, 0, 1, 1, 0, 1, 0, 1, 0];
var winnerDiv = document.getElementById('Winner');
let player1 = document.getElementById("user1-name");
let player2 = document.getElementById("user2-name");
let counter = 1;
let counter2 = 1;



document.querySelector('table').addEventListener('click', e = (two) => {
    // console.log(two.target);
    value(two.target);


});

function value(div) {
    id = div.id;
    if (flag) {
        if (state[id] == 0 || state[id] == 1) {
            winnerDiv.innerHTML = '<h3>O Turn</h3>';
            document.getElementById(id).innerHTML = 'X';
            state[id] = 'X'
            flag = !flag;
            checkWin(!flag);
        }
        else {
            // alert('No click');
        }

    }
    else {
        if (state[id] == 0 || state[id] == 1) {
            document.getElementById(id).innerHTML = 'O';
            winnerDiv.innerHTML = '<h3>X Turn</h3>';
            state[id] = 'O'
            flag = !flag;
            checkWin(!flag);
        }
        else {
            // alert('No click');
        }
    }
    // console.log(state);
}



// to check winner

function checkWin(type) {

    let winnerCon = [

        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]


    ];
    for (let i = 0; i < winnerCon.length; i++) {
        let [a, b, c] = winnerCon[i];


        if (state[a] == state[b] && state[a] == state[c]) {

            if (type) {
                winnerDiv.innerHTML = '<h2>CONGRATULATION!</h2>' + '<h3>Winner X</h3>';
                document.getElementById('user1-score').innerHTML = counter++;
                setDisable();
                break;
            }
            else {
                winnerDiv.innerHTML = '<h2>CONGRATULATION!</h2>' + '<h3>Winner O</h3>';
                document.getElementById('user2-score').innerHTML = counter2++;
                setDisable();
                break;

            }
        }

    }

    let temp = 0;
    for (let i = 0; i < state.length; i++) {
        if (state[i] == 1 || state[i] == 0 || state[i] == null) {

            temp += 1;
        }
    }
    // console.log(temp);
    if (temp == 0) {
        // alert('Draw');
        winnerDiv.innerHTML = '<h3>Try Again!</h3>' + '<h2>Draw</h2>'
    }
}


function setDisable() {
    for (let i = 0; i < state.length; i++) {
        if (state[i] == 1 || state[i] == 0) {
            state[i] = null;
        }

    }
}



document.getElementById('btn').addEventListener('click', (e) => {

    let x = document.getElementById('game');
    let A = document.getElementById('div1');
    if (x.style.dispaly === 'block') {
        x.style.display = 'none';
    }
    else {
        x.style.display = 'block';
        A.style.display = 'none';

    }

    let P1 = document.getElementById('Player1');
    let B = document.getElementById('Player2');
    player1.innerHTML = P1.value;
    player2.innerHTML = B.value;


    if (P1.value == '' || B.value == '') {
        alert('please enter your name');
        A.style.display = 'block';
        x.style.display = 'none';

    }

    // console.log(player1);
    // alert('hii')
})



//for restart game
document.getElementById('clear').addEventListener('click', e = () => {
   const choice1= confirm('Are you sure ?');
   if(choice1){
       location.reload()

   }
}
)


//to refresh the game;
function resetgame() {

    const choice = confirm("are sure you want to reset");
    if (choice) {
        flag = true;
        state = [1, 0, 1, 1, 0, 1, 0, 1, 0];
        tdCollection = document.querySelectorAll('.game table td');
        let allIndex = document.querySelectorAll('td');
        for (let i = 0; i < allIndex.length; i++) {
            allIndex[i].innerHTML = "";
            winnerDiv.innerHTML = "";

        }
    }
}










