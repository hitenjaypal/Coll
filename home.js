let text = ["TECH उत्सव 2023", "AIET", "Register Now!"];
let x = 0;
let array = 0;
let objtext = document.getElementById("text_animation");

function animation() {
  if (x < text[array].length) {
    objtext.innerHTML += text[array].charAt(x);
    x++;
    setTimeout(animation, 50); // adjust the delay to control the typing speed
  } else {
    if (array < text.length - 1) {
      x = 0;
      array++;
      objtext.innerHTML = "";
      setTimeout(animation, 600); // adjust the delay between sentences
    } else {
      x = 0;
      array = 0;
      objtext.innerHTML = "";
      setTimeout(animation, 600); // adjust the delay between sentences
    }
  }
}
animation();

//LOADER

const tl3 = gsap.timeline({
  paused: "true",
  onComplete: function () {
    firstPageAnim();
  }
});
tl3.to("#percent, #bar", {
  duration: .2,
  opacity: 0,
  zIndex: -1
});
tl3.to(".text-wrapper", {
  duration: .8,
  x: "-100%"
});
tl3.to("#preloader", {
  duration: .8,
  width: "0%",
  x: "-100%",
}, "-=0.8");
let width = 1;
let bar = document.getElementById("barconfrm");
let id;
function move() {
  document.body.style.overflow = "hidden";
  id = setInterval(frame, 40);

}
function frame() {
  if (width >= 100) {
    clearInterval(id);
    document.body.style.overflow = "auto";
    tl3.play();
  }
  else {
    width++;
    bar.style.width = width + "%";
    document.getElementById("percent").innerHTML = width + "%";
  }
}