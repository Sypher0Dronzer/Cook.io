let mealTypeHTML=``
for (let index = 0; index < 8; index++) {
    mealTypeHTML+=`
    <div class="card">
    <div class="food-img-div">
      <img
        src="images/burger-with-melted-cheese.webp"
        alt=""
      />
    </div>
    <div class="food-details">
      <h5 class="food-name">Spelt Everything Crackers</h5>
      <div class="bottom-div">
        <div class="time-div">
          <span class="material-symbols-outlined"> timer </span>
          <p>5 minutes</p>
        </div>
        <span class="material-symbols-outlined view-btn">
          bookmark
        </span>
      </div>
    </div>
  </div>`
     
 }
 ['breakfast','lunch','dinner','snack','teatime'].forEach(meal=>{
     document.querySelector(`#${meal}`).innerHTML=mealTypeHTML

 })
 

 // --------------------resizing cards-------------------------
 function adjustCardHeightSlider() {
  const cards = document.querySelectorAll('.swiper-slide .card .food-details .food-name');
  let maxHeight = 0;

  cards.forEach((card) => {
    card.style.height = ''; // Reset card height to auto
    maxHeight = Math.max(maxHeight, card.offsetHeight);
    console.log();
  });

  cards.forEach((card) => {
    card.style.height = maxHeight + 'px';
  });
}

function adjustCardHeight() {
  const cards = document.querySelectorAll('.tab-content .card .food-details .food-name');
  let maxHeight = 0;

  cards.forEach((card) => {
    card.style.height = ''; // Reset card height to auto
    maxHeight = Math.max(maxHeight, card.offsetHeight);
    console.log();
  });

  cards.forEach((card) => {
    card.style.height = maxHeight + 'px';
  });
}
window.addEventListener('resize', adjustCardHeightSlider);
window.addEventListener('resize', adjustCardHeight);
adjustCardHeightSlider()
adjustCardHeight()
