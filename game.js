let gamesq = [];
let usersq = [];
let max = [];
let arr = ["red" , "yellow", "green", "purple"];
let h2 = document.querySelector("h2");
let start = false;
let level = 0;


document.addEventListener("keypress", function(){
    if(start == false){
        console.log("start the game");
        start = true;
        levelup();
    } 
   
});

function changecolor(btn1){
    btn1.classList.add('blink');
    setTimeout(function(){
        btn1.classList.remove('blink');
    },250);
}

function levelup(){
    usersq = [];
    level++;
    max.push(level);
    h2.innerText = `level ${level}`;
    let arridx = Math.floor(Math.random()*3);
    let colorbox = arr[arridx];
    gamesq.push(colorbox);
    let randbtn = document.querySelector(`.${colorbox}`);

    changecolor(randbtn);
}

function checkans(idx){
    if(usersq[idx] == gamesq[idx]){
        if(usersq.length == gamesq.length){
            setTimeout(levelup,500);
        }
    }else{
        h2.innerHTML = `game over!! <b> your score was ${level} </b> <br> please enter any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },200);
        endgame();
    }
}

function btnpress(){
    let btn = this;
    changecolor(btn);

    let usercolor = btn.getAttribute("id");
    usersq.push(usercolor);
    checkans(usersq.length-1);
}

let btn = document.querySelectorAll(".btn");
for(btns of btn){
    btns.addEventListener("click" , btnpress);
}
function endgame(){
    start = false;
    level = 0;
    gamesq = [];
    usersq = [];
}

