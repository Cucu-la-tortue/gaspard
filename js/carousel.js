let carousel = document.getElementById("carousel");
let images = carousel.getElementsByTagName("img");
let imageWidth = images[0].clientWidth;

let wrapper = document.getElementById("carousel__wrapper");
let arrows = wrapper.getElementsByTagName("i");

let arrow_left = arrows[0];
let arrow_right = arrows[1];

arrow_left.addEventListener("click", () => {
    carousel.scrollLeft -= (imageWidth + 14);
    console.log(carousel.scrollLeft);
    console.log("hello");
});

arrow_right.addEventListener("click", () => {
    carousel.scrollLeft += (imageWidth + 14);
});