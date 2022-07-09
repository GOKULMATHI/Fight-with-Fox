const score = document.querySelector(".score span");
const holes = document.querySelectorAll(".hole");
const playBtn = document.querySelector(".buttons .play");
const stopBtn = document.querySelector(".buttons .stop");
const cursor = document.querySelector(".cursor img");

window.addEventListener("mousemove", (e) => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";

  window.addEventListener("click", () => {
    cursor.style.animation = "hit 5s ease";
    setTimeout(() => {
      cursor.style.removeProperty("animation");
    }, 100);
  });
});

playBtn.addEventListener("click", () => {
  playBtn.style.display = "none";
  stopBtn.style.display = "inline-block";

  let hole;
  let points = 0;

  const startGame = setInterval(() => {
    let arrayNo = Math.floor(Math.random() * 9);
    hole = holes[arrayNo];

    let image = document.createElement("img");
    image.setAttribute("src", "./assets/fox image.jfif");
    image.setAttribute("class", "mole");
    hole.appendChild(image);

    setTimeout(() => {
      hole.removeChild(image);
    }, 600);
  }, 700);

  window.addEventListener("click", (e) => {
    if (e.target === hole) score.innerText = ++points;
  });

  stopBtn.addEventListener("click", () => {
    clearInterval(startGame);
    stopBtn.style.display = "none";
    playBtn.style.display = "inline-block";
    score.innerText = 0;
  });
});
let btns = document.getElementsByClassName("btn");
for(let i=0; i< btns.length; i++){
    btns[i].addEventListener("click",function() {
        let buttonStyle = getComputedStyle(this);
        let buttonBgColor = buttonStyle["backgroundColor"];
        document.body.style.backgroundColor = buttonBgColor;
    
    });}
    
    var mysong=document.getElementById("song");
    var icon = document.getElementById("icon");
    icon.onclick = function(){
      Song.play();
      
      }