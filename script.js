/* ONE-TAP MUSIC */
let musicPlayed = false;

function playMusic() {
  if (!musicPlayed) {
    document.getElementById("bgMusic").play();
    musicPlayed = true;
  }
}

/* YES BUTTON */
function yesClick() {
  document.querySelector('.reel').innerHTML = `
    <h1>YAYYY 😍❤️</h1>
    <p style="margin-top:20px; font-size:18px;">
      RIMJHIM just made me the happiest person alive.
    </p>
    <p style="margin-top:10px;">
      Happy Valentine’s Day 💕
    </p>
  `;
}

/* NO BUTTON RUNS */
function moveNo() {
  const noBtn = document.querySelector('.no');
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

/* SMOOTH PHOTO SLIDER */
const photos = [
  "photo1.jpg",
  "photo2.jpg",
  "photo3.jpg",
  "photo4.jpg",
  "photo5.jpg"
];

let currentIndex = 0;
const slideImage = document.getElementById("slideImage");

setInterval(() => {
  slideImage.style.opacity = 0;

  setTimeout(() => {
    currentIndex = (currentIndex + 1) % photos.length;
    slideImage.src = photos[currentIndex];
    slideImage.style.opacity = 1;
  }, 500);
}, 3000);

/* FLOATING HEARTS */
const heartsContainer = document.querySelector('.hearts');

setInterval(() => {
  const heart = document.createElement('span');
  heart.innerHTML = '❤️';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}, 400);
