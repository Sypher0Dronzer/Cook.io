const apiKey = 'b060e94dcae3a95f66b401d2140fc22a';
const appId = '0a5e1290';

let breakfastHTML=``
let lunchHTML=``
let dinnerHTML=``
let snackHTML=``
let teatimeHTML=``

let mealVariable

async function fetchData(q) {
  const url = `https://api.edamam.com/search?q=${q}&app_id=${appId}&app_key=${apiKey}&from=13&to=23`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    // Handle the response data here
    mealVariable = data.hits; // Assign data to the global variable
  } catch (error) {
    // Handle any errors here
    console.error('Error fetching data:', error);
    throw error; // Re-throw the error to propagate it
  }
}

async function fetchMealData(meal,mealHTML) {
  try {
    await fetchData(meal);
    console.log(mealVariable); // Access the global variable here
    mealVariable.forEach((food) => {
        mealHTML += `
        <div class="card">
        <div class="food-img-div">
          <img
            src="${food.recipe.image}"
            alt=""
          />
        </div>
        <div class="food-details">
          <h5 class="food-name">${food.recipe.label}</h5>
          <div class="bottom-div">
            <div class="time-div">
              <span class="material-symbols-outlined"> timer </span>
              <p>${
                food.recipe.totalTime == 0 ? "<1" : food.recipe.totalTime
              } minutes</p>
            </div>
            <span class="material-symbols-outlined view-btn">
                bookmark
                </span>
          </div>
        </div>
        </div>`;
      });
      document.querySelector(`#${meal}`).innerHTML=mealHTML
  }
   catch (error) {
    // Handle any errors here
    console.error('Error fetching breakfast data:', error);
  }
}

// Call the function to fetch breakfast data
fetchMealData('breakfast',breakfastHTML);
fetchMealData('lunch',lunchHTML);
fetchMealData('dinner',dinnerHTML);
fetchMealData('snack',snackHTML);
fetchMealData('teatime',teatimeHTML);



// -------------asian and french-----------

let asianHTML=``
let frenchHTML=``
fetchSwiperMealData('asian',asianHTML)
fetchSwiperMealData('french',frenchHTML)
async function fetchSwiperMealData(meal,mealHTML) {
    try {
      await fetchData(meal);
      console.log(mealVariable); // Access the global variable here
      mealVariable.forEach((food) => {
          mealHTML += `
          <div class="swiper-slide">
          <div class="card">
          <div class="food-img-div">
            <img
              src="${food.recipe.image}"
              alt=""
            />
          </div>
          <div class="food-details">
            <h5 class="food-name">${food.recipe.label}</h5>
            <div class="bottom-div">
              <div class="time-div">
                <span class="material-symbols-outlined"> timer </span>
                <p>${
                  food.recipe.totalTime == 0 ? "<1" : food.recipe.totalTime
                } minutes</p>
              </div>
              <span class="material-symbols-outlined view-btn">
                  bookmark
                  </span>
            </div>
          </div>
          </div>
          </div>
          `;
        });
        document.querySelector(`#${meal}`).innerHTML=mealHTML
    }
     catch (error) {
      // Handle any errors here
      console.error('Error fetching breakfast data:', error);
    }
  }
