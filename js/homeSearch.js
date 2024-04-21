document.querySelector('.recipe-search').addEventListener('click',(event)=>{
    event.preventDefault();
    let queryParams = {
        query: "chicken",
        from: 0,
        to: 100,
        healthLabels: [],
        dietLabels: [],
        cuisineType: "",
        mealType: "dinner",
        cookingTime: "",
        ingredients: "",
        dishType: "",
      };
    console.log(queryParams);
    queryParams.query=document.querySelector('.input-box input').value
    localStorage.setItem("queryParams", JSON.stringify(queryParams));

    window.location.href='recipes.html'
})
document.querySelectorAll('.preference').forEach(preference=>{
    preference.addEventListener('click',()=>{
        console.log(preference.textContent);
        let queryParams = {
            query: "",
            from: 0,
            to: 60,
            healthLabels: [],
            dietLabels: [],
            cuisineType: "",
            mealType: "dinner",
            cookingTime: "",
            ingredients: "",
            dishType: "",
          };
        //   queryParams.healthLabels.push(preference.textContent)
          queryParams.query=preference.textContent
          console.log(queryParams);
        localStorage.setItem("queryParams", JSON.stringify(queryParams));
    
        window.location.href='recipes.html'

    })
})

