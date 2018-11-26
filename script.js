const h3 = document.querySelector("h3")
const color1 = document.querySelector(".color1")
const color2 = document.querySelector(".color2")
const buttonRandomColor = document.querySelector("#button-random-color")
const body = document.querySelector("body")


function updateGradient() {

    body.style.background =
        `linear-gradient(to right, ${ color1.value }, ${ color2.value })`

    h3.textContent = body.style.background + ";";
}

function setRandomGradient() {
    color1.value = generateRandomHexColor()
    color2.value = generateRandomHexColor()

    updateGradient()
}

function generateRandomHexColor() {
    
    const hexPossibilities = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        "A", "B", "C", "D", "E", "F"
    ]

    let hexString = `#`
    for (let i = 0; i < 6; i++) {
        const value = Math.floor(Math.random() * 16)
        hexString += hexPossibilities[value]
    }

    return hexString
}


color1.addEventListener("input", updateGradient)
color2.addEventListener("input", updateGradient)
buttonRandomColor.addEventListener("click", setRandomGradient)

// Init
updateGradient()