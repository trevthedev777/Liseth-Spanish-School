// Global Variables
const headerText = document.getElementById("header-text");
const rightArrow = document.getElementById("right-arrow");
const leftArrow = document.getElementById("left-arrow");

// Functions
function scrollOptions() {

    if (rightArrow == True) {
        console.log(123)
    } else if (leftArrow == True) {
        console.log(321)
    };

    scrollOptions();
};

// Event Listeners
rightArrow.addEventListener("click", scrollOptions);
leftArrow.addEventListener("click", scrollOptions);
