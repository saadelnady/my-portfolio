let myUl = document.getElementById("links");
let burgerIcon = document.getElementById("burgerIcon");
let exit = document.getElementById("x-mark");

burgerIcon.onclick = function () {
  myUl.classList.remove("d-none");
};
exit.onclick = function () {
  myUl.classList.add("d-none");
};

//   type Writer effect

let Writer = "Front End Developer";
let myspan = document.querySelector(".landing .text p span");
let i = 0;
let typewriter = setInterval(function () {
  myspan.innerHTML += Writer[i];
  i++;
  if (i > Writer.length - 1) {
    clearInterval(typewriter);
  }
}, 200);

// skills img slider

let mySkills = document.querySelectorAll(".skills .myskills img");
let currentSlide = 1;
let btnNext = document.getElementById("next");
let btnprevious = document.getElementById("prev");
btnNext.onclick = function () {
  if (btnNext.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide++;
    checker();
  }
};
btnprevious.onclick = function () {
  if (btnprevious.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide--;
    checker();
  }
};

function checker() {
  mySkills.forEach(function (img) {
    img.classList.remove("active");
  });
  mySkills[currentSlide - 1].classList.add("active");
  if (currentSlide == 1) {
    btnprevious.classList.add("disabled");
  } else {
    btnprevious.classList.remove("disabled");
  }
  if (currentSlide == mySkills.length) {
    btnNext.classList.add("disabled");
  } else {
    btnNext.classList.remove("disabled");
  }
}
checker();
