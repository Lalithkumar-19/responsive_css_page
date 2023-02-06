function openNav() {
    document.getElementById("menuSidebar").style.width = "250px";

}

function closeNav() {
    document.getElementById("menuSidebar").style.width = "0";

}

let state1 = true;
let state2 = true;

function showinner() {
    var inner = document.getElementById("inner");
    var arrow = document.getElementById("sidebar_arrow");
    if (state1) {

        inner.style.display = "flex";


        state1 = false;
        arrow.src = "./images/icon-arrow-up.svg";
    } else {
        inner.style.display = "none";
        state1 = true;
        arrow.src = "./images/icon-arrow-down.svg";
    }
}




function showinner2() {
    var inner = document.getElementById("inner2");
    var arrow = document.getElementById("sidebar_arrow2");
    if (state2) {

        inner.style.display = "flex";


        state2 = false;
        arrow.src = "./images/icon-arrow-up.svg";
    } else {
        inner.style.display = "none";
        state2 = true;
        arrow.src = "./images/icon-arrow-down.svg";
    }
}