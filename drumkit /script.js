// listen for a click event on all buttons - add event listener 
// add animation when button is clicked 
// play sound when clicked 


const clap = new Audio ('sound/clap.wav');
const crash = new Audio ('sound/crash.wav');
const openhit = new Audio ('sound/open-hithat.wav');
const kick = new Audio ('sound/kick.wav');
const closedhit = new Audio ('sound/closed-hithat.wav');
const snare = new Audio ('sound/snare.wav');

window.addEventListener('keydown', e =>{
    const keyCode = e.code;

if (keyCode === "KeyA") {
    clap.play();

} else if (keyCode === "KeyS") {
    crash.play();

} else if (keyCode === "KeyD") {
    openhit.play();

} else if (keyCode === "KeyF") {
    kick.play();

} else if (keyCode === "KeyG") {
    closedhit.play();

} else if (keyCode === "KeyH") {
    snare.play();
 

window.addEventListener('click', e =>{
    const keyCode = e.code;

if (keyCode === "KeyA") {
    clap.play();
    
} else if (keyCode === "KeyS") {
    crash.play();
    
} else if (keyCode === "KeyD") {
    openhit.play();
    
} else if (keyCode === "keyF") {
    kick.play();
    
} else if (keyCode === "KeyG") {
    closedhit.play();
    
} else if (keyCode === "keyH") {
    snare.play();
     

// styling
const myHeading = document.getElementById ("heading");
const list = document.getElementsByTagName ("li");
const notPink = document.getElementsByClassName ("notPink");


myHeading.addEventListener ("click", () =>{
    myHeading.style.color = "purple";
})

for (let i = 0; i<list.length; i++){
    list [i].style.color = "purple";
}

for (let i = 0; i< notPink.length; i++){
    notPink[i].style.color = "pink";
} 

function myFunction () {
    document.getElementById("heading").innerHTML = "Get Ready to Play";
})