import { PopUp } from "./detail.js";
import { RoundOff, getTime } from "./module.js";

const apiKey = "b060e94dcae3a95f66b401d2140fc22a";
const appId = "0a5e1290";

let breakfastHTML = ``;
let lunchHTML = ``;
let dinnerHTML = ``;
let snackHTML = ``;
let teatimeHTML = ``;
let asianHTML = ``;
let frenchHTML = ``;

let mealVariable;

async function fetchData(q) {
  const url = `https://api.edamam.com/search?q=${q}&app_id=${appId}&app_key=${apiKey}&from=13&to=23`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    // Handle the response data here
    mealVariable = data.hits; // Assign data to the global variable
  } catch (error) {
    // Handle any errors here
    console.error("Error fetching data:", error);
    throw error; // Re-throw the error to propagate it
  }
}

async function fetchMealData(meal, mealHTML) {
  try {
    await fetchData(meal);
    mealVariable.forEach((food) => {
      let recipeId = food.recipe.uri.slice(
        food.recipe.uri.lastIndexOf("_") + 1
      );
      let calctime = getTime(food.recipe.totalTime);
      mealHTML += `
        <div class="card" >
        <div class="food-img-div">
          <img
            src="${food.recipe.image}"
            alt=""
          />
        </div>
        <div class="food-details" data-recipe-id='${recipeId}'>
          <h5 class="food-name">${food.recipe.label}</h5>
          <div class="bottom-div">
            <div class="time-div">
              <span class="material-symbols-outlined"> timer </span>
              <p>${calctime.time || "<1"} ${calctime.timeUnit}</p>
            </div>
            <span class="material-symbols-outlined view-btn">
                bookmark
                </span>
          </div>
        </div>
        </div>
        <div class="recipe-div" id='${recipeId}'>
            <div class="left-div">

              <div class="img-div">
                <img src="${food.recipe.image}" alt="" />
              </div>
            </div>
            <div class="recipe-details-div">
              <div class="name-div">
                <h2>${food.recipe.label}</h2>
                <span class="material-symbols-outlined close-tab"> close </span>
              </div>
              <p class="author">by ${food.recipe.source}</p>
              <div class="recipe-extra-info">
                <div class="extra-div">
                  <h1>${food.recipe.ingredientLines.length}</h1>
                  <p>Ingredients</p>
                </div>
                <div class="extra-div">
                  <h1>${calctime.time || "<1"}</h1>
                  <p>${calctime.timeUnit}</p>
                </div>
                <div class="extra-div">
                  <h1>${RoundOff(food.recipe.calories)}</h1>
                  <p>Calories</p>
                </div>
              </div>
              <div class="serving-div">
                <h1>Ingredients</h1>
                <p>8 servings</p>
              </div>
              <div class="list-ingredients">
                <ul>
                ${food.recipe.ingredientLines.map((ingredient) => {
                  return `<li>${ingredient}</li>`
                })}
                  
                </ul>
              </div>
            </div>
          </div>`;
    });
    document.querySelector(`#${meal}`).innerHTML = mealHTML;

    adjustCardHeight();
  } catch (error) {
    // Handle any errors here
    console.error("Error fetching breakfast data:", error);
  }
}


async function fetchSwiperMealData(meal, mealHTML) {
  try {
    await fetchData(meal);
    // console.log(mealVariable); // Access the global variable here
    mealVariable.forEach((food) => {
      let recipeId = food.recipe.uri.slice(
        food.recipe.uri.lastIndexOf("_") + 1
      );
      let calctime = getTime(food.recipe.totalTime);

      mealHTML += `
          <div class="swiper-slide">
          <div class="card">
          <div class="food-img-div">
            <img
              src="${food.recipe.image}"
              alt=""
            />
          </div>
          <div class="food-details" data-recipe-id='${recipeId}'>
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
          <div class="recipe-div" id='${recipeId}'>
            <div class="left-div">

              <div class="img-div">
                <img src="${food.recipe.image}" alt="" />
              </div>
            </div>
            <div class="recipe-details-div">
              <div class="name-div">
                <h2>${food.recipe.label}</h2>
                <span class="material-symbols-outlined close-tab"> close </span>
              </div>
              <p class="author">by ${food.recipe.source}</p>
              <div class="recipe-extra-info">
                <div class="extra-div">
                  <h1>${food.recipe.ingredientLines.length}</h1>
                  <p>Ingredients</p>
                </div>
                <div class="extra-div">
                  <h1>${calctime.time || "<1"}</h1>
                  <p>${calctime.timeUnit}</p>
                </div>
                <div class="extra-div">
                  <h1>${food.recipe.calories}}</h1>
                  <p>Calories</p>
                </div>
              </div>
              <div class="serving-div">
                <h1>Ingredients</h1>
                <p>8 servings</p>
              </div>
              <div class="list-ingredients">
                <ul>
                ${food.recipe.ingredientLines.map((ingredient) => {
                  return `<li>${ingredient}</li>`;
                })}
                  
                </ul>
              </div>
            </div>
          </div>
          </div>
          `;
    });
    document.querySelector(`#${meal}`).innerHTML = mealHTML;
    adjustCardHeightSlider();
  } catch (error) {
    // Handle any errors here
    console.error("Error fetching breakfast data:", error);
  }
}

// --------------------resizing cards-------------------------
function adjustCardHeightSlider() {
  const cards = document.querySelectorAll(
    ".swiper-slide .card .food-details .food-name"
  );
  let maxHeight = 0;

  cards.forEach((card) => {
    card.style.height = ""; // Reset card height to auto
    maxHeight = Math.max(maxHeight, card.offsetHeight);
    console.log();
  });

  cards.forEach((card) => {
    card.style.height = maxHeight + "px";
  });
}

function adjustCardHeight() {
  const cards = document.querySelectorAll(
    ".tab-content .card .food-details .food-name"
  );
  let maxHeight = 0;

  cards.forEach((card) => {
    card.style.height = ""; // Reset card height to auto
    maxHeight = Math.max(maxHeight, card.offsetHeight);
    console.log();
  });

  cards.forEach((card) => {
    card.style.height = maxHeight + "px";
  });
}
window.addEventListener("resize", adjustCardHeightSlider);
window.addEventListener("resize", adjustCardHeight);


// -----------------adding event listner as well as calling the api data---------------------
async function addingEventListner() {
  await fetchMealData("breakfast", breakfastHTML);
  // await fetchMealData("lunch", lunchHTML);
  // await fetchMealData("dinner", dinnerHTML);
  // await fetchMealData("snack", snackHTML);
  // await fetchMealData("teatime", teatimeHTML);
  await fetchSwiperMealData("asian", asianHTML);
  // await fetchSwiperMealData("french", frenchHTML);
  PopUp()
}
addingEventListner()
