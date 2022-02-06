// Item counter logic.

const decrementButton = document.querySelector("#decrement-button");
const incrementButton = document.querySelector("#increment-button");
const shopcounter = document.querySelector("#shop-counter");

let numberOfClicks = 0;

function increment() {
    numberOfClicks += 1;
    shopcounter.textContent = numberOfClicks;
}

function decrement() {
    numberOfClicks -= 1;
    if (numberOfClicks < 0) {
        numberOfClicks = 0;
    }
    
    shopcounter.textContent = numberOfClicks;
}

incrementButton.addEventListener("click", increment);
decrementButton.addEventListener("click", decrement);

// Hover effect sticks to a clicked link.

const menuItem = document.querySelectorAll(".menu-item");

menuItem.forEach((a) => a.addEventListener("click", select));

function select(b) {
    menuItem.forEach((c) => (c.classList.remove("link-active")));
    b.target.classList.toggle("link-active");
}

// Clicking on one of the thumbnail changes the large picture.

const thumbnails = document.querySelectorAll(".thumbnail");
const currentImage = document.getElementById("large-photo");
const modalThumbnail = document.querySelectorAll(".modal-thumbnail");
const modalImage = document.getElementById("modal-photo")

thumbnails.forEach((img) => img.addEventListener("click", chooseImage));
modalThumbnail.forEach((img) => img.addEventListener("click", chooseImage));

function chooseImage(e) {
    modalThumbnail.forEach((img) => (img.classList.remove("chosen-photo")));
    thumbnails.forEach((img) => (img.classList.remove("chosen-photo")));
    currentImage.src = e.target.src;
    modalImage.src = e.target.src;
    e.target.classList.add("chosen-photo");
}

// Clicking on the large image opens lightbox.

const modal = document.getElementById("myModal");
const modalExit = document.getElementById("modalExit");

currentImage.onclick = function() {
    modal.classList.add("modal-block");
    modalImage.src = this.src;
}

// Clicking on the cross icon closes lightbox.

modalExit.onclick = function() {
    modal.classList.remove("modal-block");
}

// Clicking anywhere on the modal area closes lightbox.

window.onclick = function(e) {
    if (e.target == modal) {
        modal.classList.remove("modal-block");
    }
}

// Lightbox carousel navigation.

const prevButton = document.querySelector(".modal-previous");
const nextButton = document.querySelector(".modal-next");

window.onload = () => {
    for (let i = 0; i < modalThumbnail.length; i++) {
        let newIndex = 0;
        prevButton.onclick = () => {
            if (newIndex <= 0) {
                newIndex = 3;
            } else {
                newIndex--; 
            }
            modalImage.src = modalThumbnail[newIndex].src;
            console.log(newIndex);
        }
        nextButton.onclick = () => {
            if (newIndex >= 3) {
                newIndex = 0;
            } else {
                newIndex++;
            }
            modalImage.src = modalThumbnail[newIndex].src;
            console.log(newIndex);
        } 
    }
}

// nie ogarniam