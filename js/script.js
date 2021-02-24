
let side = document.getElementsByClassName("side")[0]
let button = document.queryselector("i")
let fade = document.getElementsByClassName("fade-layer")[0]

button.addEventListener("click", toggle_display)
fade.addEventListener("click", toggle_display)

function toggle_display(){
    side.classList.toggle("visible")
    fade.classList.toggle("cool_shade")
}