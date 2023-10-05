const changeThemeBtn = document.getElementById("change-theme-btn")
const lengthLabel = document.getElementById("length-label")
const rangeInputEl = document.getElementById("range-input-el")
const pw1 = document.getElementById("pw1")
const pw2 = document.getElementById("pw2")
const pw3 = document.getElementById("pw3")
const pw4 = document.getElementById("pw4")
const generateBtn = document.getElementById("generate-btn")

const charactersArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
"k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "?", "!", ":", "$", "ß", "§", ")", "(", "+", "-", "*", "/"]

changeThemeBtn.addEventListener("click", function(){
    document.body.classList.toggle("dark")
    if(document.body.classList == "dark"){
        changeThemeBtn.textContent = "Light"
    } else{
        changeThemeBtn.textContent = "Dark"
    }
})

rangeInputEl.addEventListener("change", showPasswordLength)

function showPasswordLength(){
    lengthLabel.innerHTML = `Length: ${rangeInputEl.value}`
}

pw1.addEventListener("click", copyPassword)
pw1.addEventListener("mouseout", tooltipTextReset)
pw2.addEventListener("click", copyPassword)
pw2.addEventListener("mouseout", tooltipTextReset)
pw3.addEventListener("click", copyPassword)
pw3.addEventListener("mouseout", tooltipTextReset)
pw4.addEventListener("click", copyPassword)
pw4.addEventListener("mouseout", tooltipTextReset)

function copyPassword(e){
    e.target.select()
    navigator.clipboard.writeText(e.target.value)
    let tooltip = document.getElementById(`${e.target.id}-tooltiptext`);
    tooltip.innerHTML = "Copied";
}
function tooltipTextReset(e) {
    let tooltip = document.getElementById(`${e.target.id}-tooltiptext`);
    tooltip.innerHTML = "Copy to clipboard";
}

generateBtn.addEventListener("click", generateAllPasswords)

function generateAllPasswords() {
    pw1.value = generatePassword()
    pw2.value = generatePassword()
    pw3.value = generatePassword()
    pw4.value = generatePassword()
}

function generatePassword() {
    let randomPassword = ""
    for (let i = 0; i < rangeInputEl.value; i++) {
        let randomNumber = Math.floor(Math.random() * charactersArray.length)
        let randomCharacter = charactersArray[randomNumber]
        randomPassword += randomCharacter
    }
        return randomPassword
}




