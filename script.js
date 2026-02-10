const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const card = document.getElementById("card");
const surprise = document.getElementById("surprise");
const music = document.getElementById("bgMusic");
const slidePhoto = document.getElementById("slidePhoto");
const caption = document.getElementById("caption");

/* NO button escape */
noBtn.addEventListener("mouseenter", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

/* Photos + captions */
const slides = [
  {
    img: "photo1.jpg",
    text: "You make everything better ❤️"
  },
  {
    img: "photo2.jpg",
    text: "My favorite smile 😍"
  },
  {
    img: "photo3.jpg",
    text: "Forever looks good with you 💖"
  }
];

let index = 0;
let interval;

/* YES button */
yesBtn.addEventListener("click", () => {
  card.classList.add("hidden");
  surprise.classList.remove("hidden");
  playMusic();
  startAutoSlide();
});

/* Auto slideshow */
function showSlide(i) {
  slidePhoto.src = slides[i].img;
  caption.innerText = slides[i].text;
}

function startAutoSlide() {
  interval = setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
  }, 3000);
}

/* Swipe support (mobile) */
let startX = 0;

slidePhoto.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

slidePhoto.addEventListener("touchend", e => {
  const endX = e.changedTouches[0].clientX;
  if (endX < startX - 50) {
    index = (index + 1) % slides.length;
  } else if (endX > startX + 50) {
    index = (index - 1 + slides.length) % slides.length;
  }
  showSlide(index);
});

/* Music fade-in */
function playMusic() {
  music.volume = 0;
  music.play();
  let v = 0;
  const fade = setInterval(() => {
    v += 0.05;
    music.volume = v;
    if (v >= 0.7) clearInterval(fade);
  }, 200);
}

