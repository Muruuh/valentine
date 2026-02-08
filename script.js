const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
const music = document.getElementById("bgMusic");
const toggle = document.getElementById("modeToggle");

const card = document.getElementById("mainCard");
const finalScreen = document.getElementById("finalScreen");
const slideImg = document.getElementById("slideImg");

const slides = ["slide1.jpg", "slide2.jpg", "slide3.jpg"];
let slideIndex = 0;

const startTime = 93;
const endTime = 126;
const climaxTime = 160; // BEST PART 🔥

let noCount = 0;

/* 🎶 music start */
document.body.addEventListener("click", () => {
  music.currentTime = startTime;
  music.volume = 0;
  music.play();

  let fade = setInterval(() => {
    if (music.volume < 0.3) music.volume += 0.02;
    else clearInterval(fade);
  }, 200);
}, { once: true });

music.addEventListener("timeupdate", () => {
  if (music.currentTime >= endTime) music.currentTime = startTime;
});

/* 🙈 NO */
noBtn.addEventListener("click", () => {
  noCount++;
  if (noCount === 1) {
    message.innerText = "Нээрээ итгэлтэй юу? 🥺";
  } else {
    noBtn.style.transform =
      `translate(${Math.random()*200-100}px, ${Math.random()*200-100}px)`;
  }
});

/* 💖 YES – FINAL BOSS */
yesBtn.addEventListener("click", () => {
  // music climax
  music.currentTime = climaxTime;
  music.volume = 0.6;

  // fireworks hearts
  for (let i = 0; i < 40; i++) {
    setTimeout(createHeart, i * 80);
  }

  // switch screen
  setTimeout(() => {
    card.style.display = "none";
    finalScreen.classList.remove("hidden");
    startSlideshow();
  }, 1200);
});

/* 💕 hearts */
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 30 + 20 + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 700);

/* 📸 slideshow */
function startSlideshow() {
  setInterval(() => {
    slideIndex = (slideIndex + 1) % slides.length;
    slideImg.src = slides[slideIndex];
  }, 2500);
}

/* 🌙 dark mode */
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.innerText = document.body.classList.contains("dark") ? "☀️" : "🌙";
});
