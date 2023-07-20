// SELECTEURS
// document.querySelector("h4").style.background = "yellow";
// const baliseHTML = document.querySelecteur("h4");

// Click event
const questionContainair = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

questionContainair.addEventListener("click", () => { 
  questionContainair.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
    response.classList.add("show-response");
    response.style.background = "green";
});

btn2.addEventListener("click", () => {
    response.classList.add("show-response");
    response.style.background = "red";
});

/* <div> #id > .class > baliseHTML */


//---------------------------------------------------------
// Mouse Events
const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
  console.log(e);
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%";
});
                        
window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%";
  mousemove.style.border = "2px solid teal";                                               
});
                        
questionContainair.addEventListener("mouseenter", () => {
  questionContainair.style.background = "rgba(0, 0, 0, 0.6";
});
                        
questionContainair.addEventListener("mouseout", () => {
  questionContainair.style.background = "pink";
});
 
response.addEventListener("mouseover", () => {
  response.style.transform ="rotate(2deg)";
});

// --------------------------------------------------------
// Keypress event

const KeypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

const ring = () => {
  const audio = new audio();
  audio.src = "./Enter.mp3";
  audio.play(); 
};


document.addEventListener("keypress", (e) => {
  key.textContent = e.key;
  
  if (e.key === "j") {
    KeypressContainer.style.background = "pink";
  } else if (e.key === "h") {
    KeypressContainer.style.background = "teal";
  } else {
    KeypressContainer.style.background = "red";
  }
  
  ring();
});



