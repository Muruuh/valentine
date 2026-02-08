const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
const music = document.getElementById("bgMusic");
const toggle = document.getElementById("modeToggle");

const startTime = 93;   // 1:33
const endTime = 126;    // 2:06

let noCount = 0;

/* 🎶 Music start on first click */
document.body.addEventListener("click", () => {
  music.currentTime = startTime;
  music.play();
}, { once: true });

/* 🔁 Loop only selected part */
music.addEventListener("timeupdate", () => {
  if (music.currentTime >= endTime) {
    music.currentTime = startTime;
  }
});

/* 🙈 No button logic */
noBtn.addEventListener("click", () => {
  noCount++;
  if (noCount === 1) {
    message.innerText = "Нээрээ итгэлтэй юу? 🥺 Зүрх жаахан өвдлөө...";
  } else {
    noBtn.style.transform =
      `translate(${Math.random()*200-100}px, ${Math.random()*200-100}px)`;
  }
});

/* 💖 Yes button */
yesBtn.addEventListener("click", () => {
  message.innerHTML = `
    💖 Миний хамгийн их хүссэн хариу 💖<br>
    Чамтай хамт байх мөч бүр<br>
    хайраар дүүрэн байг ✨
  `;
});

/* 🌙 Dark mode */
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.innerText = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

/* 💕 Floating hearts */
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}, 400);
