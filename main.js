// window.scroll code structure was taken from W3 School "How TO - Sticky/Affix Navbar"
// It was used to create the sticky navigation menu while a user is scrolling down page. The function name, variable name, and class names have been changed.
// links: https://www.w3schools.com/howto/howto_js_navbar_sticky.asp
//window.onscroll excutes the function "sticky_navigation_menu" while the user is scrolling a page.
//The function "sticky_navigation_menu" grabs the navigation bar its id called "navigation_bar" and sticks the menu bar to the top when a user scrolls down the page.
// When a user scrolls back up to the top of the page the function removes the sticky top down menu bar.
window.onscroll = function () { sticky_navigation_menu () };

let navigation_menu = document.getElementById("navigation_bar");
let slide_down= navigation_menu.offsetTop;

function sticky_navigation_menu () {
    if (window.pageYOffset >= slide_down) {
        navigation_menu.classList.add ("slide_down")
    } else {
        navigation_menu.classList.remove("slide_down");
    }
}



let sections = document.getElementsByTagName("section");
let first_section = sections[0];
let second_section = sections[1];
let third_section = sections[2];

window.addEventListener("scroll", event => {

    if(window.scrollY > 800) {
        second_section.classList.add("fadeIn")
        // console.log("second scroll")
    }

    if(window.scrollY > 1600) {
        third_section.classList.add("fadeIn")
        // console.log("third scroll")
    }
})
