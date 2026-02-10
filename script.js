/* ===== ELEMENTS ===== */
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

const card = document.getElementById("card");
const surprise = document.getElementById("surprise");
const finalPage = document.getElementById("final");
const noPage = document.getElementById("noPage");

const slidePhoto = document.getElementById("slidePhoto");
const caption = document.getElementById("caption");
const progress = document.getElementById("progress");

const music = document.getElementById("bgMusic");
const retryYes = document.getElementById("retryYes");
const noText = document.getElementById("noText");

// Force spacing between photo and caption
const photoBox = document.querySelector(".photo-box");

photoBox.style.marginBottom = "18px"; // SPACE FIX
caption.style.color = "#444";
caption.style.fontSize = "15px";

/* ===== CAPTION POLISH (spacing + soft look) ===== */
caption.style.marginTop = "16px";
caption.style.color = "#444";
caption.style.fontSize = "15px";

/* ===== SLIDES (7 PHOTOS) ===== */
const slides = [
  { img: "assets/photo1.jpg", text: "You make everything better ❤️" },
  { img: "assets/photo2.jpg", text: "My favorite smile 😍" },
  { img: "assets/photo3.jpg", text: "This moment means everything 💖" },
  { img: "assets/photo4.jpg", text: "I feel safe with you 🤍" },
  { img: "assets/photo5.jpg", text: "You’re my happy place 🌸" },
  { img: "assets/photo6.jpg", text: "Forever feels right 💫" },
  { img: "assets/photo7.jpg", text: "Always you. Always us ❤️" }
];

let index = 0;
let interval;

/* ===== TYPEWRITER EFFECT ===== */
function typeText(el, text) {
  el.innerText = "";
  let i = 0;
  const t = setInterval(() => {
    el.innerText += text[i];
    i++;
    if (i === text.length) clearInterval(t);
  }, 40);
}

/* ===== SHOW SLIDE ===== */
function showSlide(i) {
  slidePhoto.src = slides[i].img;
  typeText(caption, slides[i].text);
  progress.innerHTML = slides
    .map((_, idx) => (idx <= i ? "❤️" : "🤍"))
    .join(" ");
}

/* ===== SHORT SLIDESHOW ===== */
function startSlideshow() {
  index = 0;
  showSlide(index);

  interval = setInterval(() => {
    index++;

    if (index >= slides.length) {
      clearInterval(interval);
      setTimeout(() => {
        surprise.classList.add("hidden");
        finalPage.classList.remove("hidden");
        document.querySelector(".finalText").classList.remove("hidden");
      }, 800);
      return;
    }

    showSlide(index);
  }, 1500); // ⏱️ 1.5 sec per photo
}

/* ===== MUSIC ===== */
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

/* ===== YES BUTTON ===== */
yesBtn.onclick = () => {
  card.classList.add("hidden");
  surprise.classList.remove("hidden");
  playMusic();
  startSlideshow();
  if (navigator.vibrate) navigator.vibrate(20);
};

/* ===== NO BUTTON (ESCAPE + STORY) ===== */
noBtn.onmouseenter = () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
};

noBtn.onclick = () => {
  card.classList.add("hidden");
  noPage.classList.remove("hidden");
  typeText(noText, "You really thought NO was an option? 😏");
};

/* ===== RETRY YES ===== */
retryYes.onclick = () => {
  noPage.classList.add("hidden");
  surprise.classList.remove("hidden");
  playMusic();
  startSlideshow();
};

/* ===== FLOATING HEARTS ===== */
const hearts = document.getElementById("hearts");
setInterval(() => {
  const h = document.createElement("span");
  h.innerText = "❤️";
  h.style.left = Math.random() * 100 + "vw";
  h.style.animationDuration = Math.random() * 3 + 4 + "s";
  hearts.appendChild(h);
  setTimeout(() => h.remove(), 7000);
}, 400);

