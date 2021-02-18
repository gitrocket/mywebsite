


$(document).ready(function() {
    // ***************** smooth scroll start *******************//
    function smoothScroll(event) {
        // 2- set prevent default action
        if(this.hash !== "") {
            event.preventDefault();
        // 3- set variable to hold href value
        var hash = this.hash;
        // 4- grab html and body elements and run jQuery animage function
        // 5- set second argument to duration of scroll
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 500, function() {
            window.location.hash = hash;
        });
        // fade in center divs
        $(".center").hide().fadeIn(2000);
        $(".skills-container").hide().fadeIn(2000);
        $(".projects-container").hide().fadeIn(2000);
    }
    
}
    // 1- grab all anchors, set event listener, call smoothScroll
    $("a").on('click', smoothScroll)
     // fade in logo on page load
    $("#logo").hide().fadeIn(1000);

     // ***************** smooth scroll end *******************//

})

// ***************** change color scheme of navbar on scroll start *******************//

const navbar = document.getElementById("navbar");
const logoName = document.querySelector("#logo h1");
const logoTitle = document.querySelector("#logo span");

window.addEventListener("scroll", function() {
    const scrollHeight = window.pageYOffset;
    const navbarHeight = navbar.getBoundingClientRect().height;

    if(scrollHeight > navbarHeight) {
        navbar.style.backgroundColor = "#ffffff";
        logoName.style.color = "var(--grey-3)";
        logoTitle.style.color = "var(--grey-1)";
    } else {
        navbar.style.backgroundColor = "var(--grey-5)";
    }

    // ***************** change color scheme of navbar on scroll end *******************//

    // add more jQuery starting here

})


// vanilla javascript goes below

// ***************** change active class start *******************//

const anchor = document.querySelectorAll('#list-container li a');

function clickAnchor(e) {
    // when anchor is clicked, set class for all items to an empty string ...
        anchor.forEach((item) => {
            item.classList.value = "";
        })
        // and add the active class to the current target
        e.currentTarget.classList.value = "active";
}

anchor.forEach((item) => {
    item.addEventListener('click', clickAnchor);
})

// ***************** change active class end *******************//


