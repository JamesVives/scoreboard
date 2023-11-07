

let plusHome = document.getElementById("home-points");
let plusAway = document.getElementById("away-points");

let pointsHome = 0;
let pointsAway = 0;

function plus1home(){

    pointsHome += 1;
    plusHome.textContent = pointsHome;

}

function plus2home(){

    pointsHome +=2;
    plusHome.textContent = pointsHome;
    
}
function plus3home(){

    pointsHome +=3;
    plusHome.textContent = pointsHome;
    
}
function plus1away(){

    pointsAway += 1;
    plusAway.textContent = pointsAway;
    
}

function plus2away(){

    pointsAway += 2;
    plusAway.textContent = pointsAway;
    

}
function plus3away(){

    pointsAway += 3;
    plusAway.textContent = pointsAway;
    
}

function newgame(){

    pointsHome = 0;
    plusHome.textContent = pointsHome;

    pointsAway = 0;
    plusAway.textContent = pointsAway;

}