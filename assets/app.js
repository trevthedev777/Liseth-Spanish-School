// Global Variables
const headerText = document.getElementById("header-text");
const rightArrow = document.getElementById("right-arrow");
const leftArrow = document.getElementById("left-arrow");

// Functions
function scrollOptions() {

    const heroInfoRight = document.getElementById("hero-info-right");
    const heroInfoLeft = document.getElementById("hero-info-left");

    if (rightArrow == True) {
        heroInfoRight.innerHTML=`
        <h3>Private Tutoring Made With Confidence</h3>
                        <ul>
                            <li>
                                One on One Private Tutoring
                            </li>
                            <li>
                                Worldwide Availability
                            </li>
                            <li>
                                Comprehensive understanding of language
                            </li>
                            <li>
                                Communication Classes
                            </li>
                            <li>
                                One Hour Is All you need per class
                            </li>
                        </ul>`
    } else if (leftArrow == True) {
        heroInfoLeft.innerHTML=`
        <h3>Private Tutoring Made With Confidence</h3>
                        <ul>
                            <li>
                                One on One Private Tutoring
                            </li>
                            <li>
                                Worldwide Availability
                            </li>
                            <li>
                                Comprehensive understanding of language
                            </li>
                            <li>
                                Communication Classes
                            </li>
                            <li>
                                One Hour Is All you need per class
                            </li>
                        </ul>`
    };

};

// Event Listeners
rightArrow.addEventListener("click", scrollOptions);
leftArrow.addEventListener("click", scrollOptions);
