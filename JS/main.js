let words = document.querySelectorAll(".word");
words.forEach((word) => {
  let letters = word.textContent.split("");
  word.textContent = "";
  letters.forEach((letter) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.append(span);
  });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";
let changeText = () => {
  let currentWord = words[currentWordIndex];
  let nextWord =
    currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
  Array.from(currentWord.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.className = "letter out";
    }, i * 80);
  });
  nextWord.style.opacity = "1";
  Array.from(nextWord.children).forEach((letter, i) => {
    letter.className = "letter behind";
    setTimeout(() => {
      letter.className = "letter in";
    }, 340 + i * 80);
  });
  currentWordIndex =
    currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};
changeText();
setInterval(changeText, 3000);
/*--------------------- Start circle skills --------------------*/
const circle = document.querySelectorAll(".circle");
circle.forEach((el) => {
  var dots = el.getAttribute("data-dots");
  var marked = el.getAttribute("data-percent");
  var percent = Math.floor((dots * marked) / 100);
  var points = "";
  var rotate = 360 / dots;
  for (let i = 0; i < dots; i++) {
    points += `<div class="points" style="--i:${i}; --rot: ${rotate}deg;"></div>`;
  }
  el.innerHTML = points;
  const pointsMarked = el.querySelectorAll(".points");
  for (let i = 0; i < percent; i++) {
    pointsMarked[i].classList.add("marked");
  }
});
/*---------------------- End circle skills ---------------------*/

/*---------------------- Start portfolio -----------------------*/
let filter = document.querySelectorAll(".filter-buttons button");
let items = document.querySelectorAll(".port-box");

filter.forEach((btn) => {
  btn.addEventListener("click", changeActive);
  btn.addEventListener("click", manageItem);
});

function changeActive() {
  filter.forEach((btn) => {
    btn.classList.remove("active");
    this.classList.add("active");
  });
}

function manageItem() {
  items.forEach((item) => {
    item.style.display = "none";
  });
  document.querySelectorAll(this.dataset.filter).forEach((el) => {
    el.style.display = "block";
  });
}
/*----------------------- End portfolio ------------------------*/

/*---------------------- Start active menu ---------------------*/
let menuLi = document.querySelectorAll("header ul li a");
let section = document.querySelectorAll("section");

function activeMenu() {
  let len = section.length;
  while (--len && window.scrollY + 97 < section[len].offsetTop) {}
  menuLi.forEach((sec) => sec.classList.remove("active"));
  menuLi[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);
/*----------------------- End active menu ----------------------*/

/*----------------------- Start sticky navbar ------------------*/
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 50);
});
/*------------------------ End sticky navbar -------------------*/

/*------------------------ Start toggle icon -------------------*/
let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");
menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-x");
  navlist.classList.toggle("open");
};
window.onscroll = () => {
  menuIcon.classList.remove("fa-x");
  navlist.classList.remove("open");
};
/*------------------------- End toggle icon --------------------*/

/*------------------------- Start paraliax ---------------------*/
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-items");
    } else {
      entry.target.classList.remove("show-items");
    }
  });
});
const scrollScale = document.querySelectorAll(".scroll-scale");
const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollScale.forEach((el) => observer.observe(el));
scrollBottom.forEach((el) => observer.observe(el));
/*-------------------------- End paraliax ----------------------*/
let cDate = document.querySelector("#c-date")
let date = new Date
cDate.innerHTML = date.getFullYear()
document.querySelectorAll(".to-top").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault()
    const targetId = this.getAttribute("href").substring(1)
    const target = document.getElementById(targetId)
    if (target) {
      target.scrollIntoView({ behavior: "smooth"})
    }
  })
})