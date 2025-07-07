function showMessage() {

  setTimeout(function () {
    alert("lorep ipsum");
  }, 500);
}

// Falling heart rain
const heartsContainer = document.getElementById('hearts-container');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 3 + Math.random() * 3 + "s"; // 3 to 6 seconds
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

setInterval(createHeart, 300); // More frequent for rain effect
