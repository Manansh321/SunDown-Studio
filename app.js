
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

// console.log(a);

function page4Animation() {
  var eleC = document.querySelector("#elem-container");
  let fixed = document.querySelector("#fixed-image");

  eleC.addEventListener("mouseenter", function () {
    fixed.style.display = "block";
  });

  eleC.addEventListener("mouseleave", function () {
    fixed.style.display = "none";
  });

  var a = document.querySelector("#elem1");
  a.addEventListener("mouseenter", () => {
    let img = a.getAttribute("data-image");
    // console.log(img);
    fixed.style.backgroundImage = `url(${img})`;
  });

  let elems = document.querySelectorAll(".elem1");

  elems.forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
      let img = elem.getAttribute("data-image");
      // console.log(img);
      fixed.style.backgroundImage = `url(${img})`;
    });
  });
}

function swiperAnimaiton() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: false,   
    spaceBetween: 100, 
  });
}


function menuAnimation() {
  let menu = document.querySelector("#heading");
  let navImg = document.querySelector("#image121");
  let full = document.querySelector("#full-scr");
  menu.addEventListener("click", () => {
    let flag = 0; 
    if (flag == 0) {
      full.style.top = 0;
      navImg.style.opacity = 0;
      flag = 1;
    } else {
      full.style.top = "-100%";
      navImg.style.opacity = 1;
      flag = 0;
    }
  });
}

function loaderAnimation() {    
let loader = document.querySelector("#loader") ;  
setTimeout(()=> {  
    loader.style.top = "-100%";  
}, 4200) 
}

swiperAnimaiton();

page4Animation();

// menuAnimation();

loaderAnimation();
 