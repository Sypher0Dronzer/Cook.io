function adjustCardHeight() {
  const cards = document.querySelectorAll('.swiper-slide .card');
  let maxHeight = 0;

  cards.forEach((card) => {
    card.style.height = ''; // Reset card height to auto
    maxHeight = Math.max(maxHeight, card.offsetHeight);
  });

  cards.forEach((card) => {
    card.style.height = maxHeight + 'px';
  });
}

// Call the function when the page loads and when it's resized
window.addEventListener('DOMContentLoaded', adjustCardHeight);
window.addEventListener('resize', adjustCardHeight);