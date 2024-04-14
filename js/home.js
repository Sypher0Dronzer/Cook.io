
import { breakfast } from "../data/breakfastData.js";
import { lunch } from "../data/lunchData.js";
import { dinner } from "../data/dinnerData.js";
import { snack } from "../data/snackData.js";
import { teatime } from "../data/teatimeData.js";

let breakfastHTML=``;
let lunchHTML=``;
let dinnerHTML=``;
let teatimeHTML=``;
let snackHTML=``;
const mealType=[breakfast,lunch,dinner,teatime,snack]
const mealTypeHTML=[breakfastHTML,lunchHTML,dinnerHTML,teatimeHTML,snackHTML]

mealType.forEach((meal,index)=>{
  meal.forEach(food =>{

    mealTypeHTML[index] +=`
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
          <p>${food.recipe.totalTime==0? '<1':food.recipe.totalTime} minutes</p>
        </div>
        <span class="material-symbols-outlined view-btn">
            visibility
            </span>
      </div>
    </div>
    </div>`
    })
})

document.querySelector('#BreakfastTab').innerHTML=mealTypeHTML[0]
document.querySelector('#LunchTab').innerHTML=mealTypeHTML[1]
document.querySelector('#DinnerTab').innerHTML=mealTypeHTML[2]
document.querySelector('#TeatimeTab').innerHTML=mealTypeHTML[3]
document.querySelector('#SnackTab').innerHTML=mealTypeHTML[4]


let limit=10
let from=0
const apiKey = '%20b060e94dcae3a95f66b401d2140fc22a';
const appId = '0a5e1290';
const mealtype = 'breakfast';
const numberOfRecipes = 12;
async function fetchData() {
  const url = `https://api.edamam.com/search?q=${mealtype}&app_id=${appId}&app_key=${apiKey}&from=0&to=${numberOfRecipes}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    // Handle the response data here
    console.log(data);
    console.log(url);
  } catch (error) {
    // Handle any errors here
    console.error('Error fetching data:', error);
  }
}
// fetchData()
