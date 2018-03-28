window.onscroll = function () { stickyNav () };

let navbar = document.getElementById("navbar");
let sticky= navbar.offsetTop;

function stickyNav () {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add ("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}



let sections = document.getElementsByTagName("section");
let first_section = sections[0];
let second_section = sections[1];
let third_section = sections[2];

window.addEventListener("scroll", event => {

    if(window.scrollY > 800) {
        second_section.classList.add("fadeIn")
        console.log("second scroll")
    }

    if(window.scrollY > 1600) {
        third_section.classList.add("fadeIn")
        console.log("third scroll")
    }
})





