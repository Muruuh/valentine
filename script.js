const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
const music = document.getElementById("bgMusic");
const toggle = document.getElementById("modeToggle");

const startTime = 93;   // 1:33
const endTime = 126;    // 2:06

let noCount = 0;
let fadeInterval = null;

<<<<<<< HEAD
/* 🎶 Music start on first click */
=======
/* 🎶 Start music with fade-in */
>>>>>>> b3cd2dd (update js)
document.body.addEventListener("click", () => {
  music.currentTime = startTime;
  music.play();
<<<<<<< HEAD
=======

  fadeInterval = setInterval(() => {
    if (music.volume < 0.3) {
      music.volume += 0.02;
    } else {
      clearInterval(fadeInterval);
    }
  }, 200);
>>>>>>> b3cd2dd (update js)
}, { once: true });

/* 🔁 Loop only selected part */
music.addEventListener("timeupdate", () => {
  if (music.currentTime >= endTime) {
    music.currentTime = startTime;
  }
});

<<<<<<< HEAD
/* 🙈 No button logic */
noBtn.addEventListener("click", () => {
  noCount++;
  if (noCount === 1) {
    message.innerText = "Нээрээ итгэлтэй юу? 🥺 Зүрх жаахан өвдлөө...";
=======
/* 🙈 NO button */
noBtn.addEventListener("click", () => {
  noCount++;
  if (noCount === 1) {
    message.innerText = "Нээрээ итгэлтэй юу? 🥺 Миний зүрх чамайг сонгосон шүү...";
>>>>>>> b3cd2dd (update js)
  } else {
    noBtn.style.transform =
      `translate(${Math.random()*200-100}px, ${Math.random()*200-100}px)`;
  }
});

<<<<<<< HEAD
/* 💖 Yes button */
yesBtn.addEventListener("click", () => {
  message.innerHTML = `
    💖 Миний хамгийн их хүссэн хариу 💖<br>
    Чамтай хамт байх мөч бүр<br>
    хайраар дүүрэн байг ✨
  `;
=======
/* 💖 YES button – MAGIC MOMENT */
yesBtn.addEventListener("click", () => {
  message.innerHTML = `
    Чамтай хамт байх мөч бүр<br>
    хайраар дүүрэн байг ✨ <br>
    Чамтай хамт байх<br>
    бүх өдөр Valentine байг 🌹
  `;

  // music volume up
  let volUp = setInterval(() => {
    if (music.volume < 0.6) {
      music.volume += 0.02;
    } else {
      clearInterval(volUp);
    }
  }, 150);

  // heart rain
  for (let i = 0; i < 30; i++) {
    setTimeout(createHeart, i * 100);
  }
>>>>>>> b3cd2dd (update js)
});

/* 🌙 Dark mode */
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.innerText = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

/* 💕 Floating hearts */
<<<<<<< HEAD
setInterval(() => {
=======
function createHeart() {
>>>>>>> b3cd2dd (update js)
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "💖";
  heart.style.left = Math.random() * 100 + "vw";
<<<<<<< HEAD
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}, 400);
=======
  heart.style.fontSize = Math.random() * 25 + 15 + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}

/* soft background hearts */
setInterval(createHeart, 600);
>>>>>>> b3cd2dd (update js)
