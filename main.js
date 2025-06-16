const text = "Balavignesh";
let i = 0;
function typeEffect() {
    if (i <text.length) {
        document.getElementById("Name").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 100);
    }
}
window.onload = typeEffect;
