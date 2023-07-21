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
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});
                        
window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
  mousemove.style.border = "2px solid teal";                                               
});
                        
questionContainair.addEventListener("mouseenter", () => {
  questionContainair.style.background = "rgba(0, 0, 0, 0.6)";
});
                        
questionContainair.addEventListener("mouseout", () => {
  questionContainair.style.background = "pink";
});
 
response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});

// --------------------------------------------------------
// Keypress event

const KeypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

const ring = (key) => {
  const audio = new Audio();
  audio.src = key + ".mp3";
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
  
  if (e.key === "z") ring(e.key);
});

// --------------------------------------------------------

// Scroll Event

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});

// ---------------------------------------------------------------------
// Form Event

const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
  language = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  console.log(cgv.checked);
  
  if (cgv.checked) {
    document.querySelector("form > div").innerHTML = `
    <h3>Pseudo : ${pseudo}<h3>
    <h4>Langage préféré : ${language}<h4>
    `;
  } else {
    alert("Veuillez accepter les CGV");
  }
});

//-----------------------------------------------------------
// Load event
window.addEventListener("load", () => {
  // console.log("Document Chargé !");
});

//-----------------------------------------------------------
// ForEach
// const boxes = document.getElementsByClassName("box");
const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    box.style.transform = "scale(0.7)";
  });
});

//----------------------------------------------------------- 
// addEventListener Vs onclick
// document.body.onclick = function() {
//   console.log("Scroll !");
// };

// Bublbing => fin (de base l'eventlistener est paramétré en mode Bublbing)
document.body.addEventListener("click", () => {
    console.log("click 1 !");
});

// Usecapture
document.body.addEventListener(
  "click",
  () => {
    console.log("click 2 !");
  },
  true
);  
 
// Lien

//----------------------------------------------------------
// Stop propagation
// questionContainair.addEventListener("click", (e) => {
//   alert("Test !");
//   e.stopPropagation();
// });

// removeEventListener

// 
// BOM

// console.log(window.innerHeight);
// console.log(window.scrollY);
// Window.open("http://google.com", "cours js", "height=600,
// width=800");
// Window.close()

// Evenements adossés a window
//alert("hello");

// confirm
btn2.addEventListener("click", () => {
  confirm("Voullez vous vraiment vous trompez ?");
}); 
 


  




