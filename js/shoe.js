// LINKS
let links_container = document.getElementById('links');
let links = links_container.getElementsByClassName('link');

// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
        let current = links_container.getElementsByClassName("active");
        current[0].classList.remove("active");
        this.className += " active";        
    });
}