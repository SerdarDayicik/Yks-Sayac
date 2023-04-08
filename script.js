// Sayaç ayarları
const countDownDate = new Date("2023-06-17T09:00:00Z").getTime();

// HTML elementlerini seçin
const countdownEl = document.getElementById("countdown");
const toggleBtn = document.querySelector(".toggle-btn");
const bodyEl = document.querySelector("body");

// Gece/Gündüz modu ayarları
let isDarkMode = false;

function toggleMode() {
    var body = document.querySelector('body');
    var button = document.querySelector('.toggle-btn');
    var sunIcon = document.querySelector('.toggle-btn .fa-sun');
    var moonIcon = document.querySelector('.toggle-btn .fa-moon');
    
    body.classList.toggle('dark-mode');
    button.classList.toggle('dark-mode');
    
    if (sunIcon.classList.contains('hidden')) {
      sunIcon.classList.remove('hidden');
      moonIcon.classList.add('hidden');
    } else {
      sunIcon.classList.add('hidden');
      moonIcon.classList.remove('hidden');
    }
  }

// Sayaç fonksiyonu
function updateCountdown() {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  // gün, saat, dakika ve saniyeleri hesapla
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // HTML elementlerinde güncelleme yap
  countdownEl.innerHTML = `${days} gün, ${hours} saat, ${minutes} dakika, ${seconds} saniye kaldı.`;
}

// Sayaç fonksiyonunu her saniye çağır
setInterval(updateCountdown, 1000);
