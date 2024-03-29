let clicks = 0;
let level = 1;
let intervalID;
const movementSpeed = 5000;

function moveButton() {
    const button = document.getElementById("button");
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const newMarginTop = Math.random() * (windowHeight - 50) + "px";
    const newMarginLeft = Math.random() * (windowWidth - 100) + "px";
    button.style.marginTop = newMarginTop;
    button.style.marginLeft = newMarginLeft;
}

function handleClick() {
    clicks++;
    if (clicks === 3) {
        clearInterval(intervalID); 
        alert("You won level " + level);
        level++;
        clicks = 0;
        if (level <= 6) {
            setTimeout(() => {
                moveButton();
                intervalID = setInterval(moveButton, movementSpeed);
            }, 500);
        } else {
            alert("You have completed all levels!");
        }
    }
}

document.getElementById("button").addEventListener("mouseover", () => {
    clearInterval(intervalID);
});

document.getElementById("button").addEventListener("mouseout", () => {
    intervalID = setInterval(moveButton, movementSpeed);
});

document.getElementById("button").addEventListener("click", () => {
    handleClick();
});

intervalID = setInterval(moveButton, movementSpeed);
