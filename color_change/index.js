const myinput = document.getElementById("myInput");
const mybutton = document.getElementById("myButton");

mybutton.addEventListener("click", () => {
    const randomcolor = getRandomcolor();
    myinput.style.backgroundColor = randomcolor;
})

function getRandomcolor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color = color + letters[Math.floor(Math.random() * 16)];
    }
    return color;
}