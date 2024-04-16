const APP_ID = '0a5e1290';
const APP_KEY = 'b060e94dcae3a95f66b401d2140fc22a';

function constructRecipeSearchQuery(params) {
  const queryParams = [];

  // Add the mandatory parameters
  queryParams.push(`app_id=${APP_ID}`, `app_key=${APP_KEY}`);

  // Add optional parameters if provided
  if (params.query) queryParams.push(`q=${encodeURIComponent(params.query)}`);
  if (params.from) queryParams.push(`from=${params.from}`);
  if (params.to) queryParams.push(`to=${params.to}`);
  if (params.healthLabels) {
    params.healthLabels.forEach(label => {
      queryParams.push(`health=${encodeURIComponent(label)}`);
    });
  }
  if (params.dietLabels) {
    params.dietLabels.forEach(label => {
      queryParams.push(`diet=${encodeURIComponent(label)}`);
    });
  }
  if (params.cuisineType) queryParams.push(`cuisineType=${encodeURIComponent(params.cuisineType)}`);
  if (params.mealType) queryParams.push(`mealType=${encodeURIComponent(params.mealType)}`);
  if (params.calories) queryParams.push(`calories=${params.calories}`);

  // Construct the full query string
  const queryString = queryParams.join('&');
  return `https://api.edamam.com/search?${queryString}`;
}

// Example usage:
const queryParams = {
  query: 'chicken',
  from: 0,
  to: 10,
  healthLabels: ['peanut-free', 'tree-nut-free'],
  dietLabels: ['low-carb'],
  cuisineType: 'Italian',
  mealType: 'lunch',
  calories: '100-500'
};

const apiUrl = constructRecipeSearchQuery(queryParams);
console.log(apiUrl);
