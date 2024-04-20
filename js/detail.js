document.querySelectorAll('.recipe-div').forEach(page=>{
    page.addEventListener('click',(e)=>{
        if(e.target.classList.contains('close-tab')){
let parentDiv=e.target.parentNode.parentNode.parentNode;
parentDiv.style.display='none'
        }
    })
})
function PopUp(){

    document.querySelectorAll('.card').forEach(card=>{
        card.addEventListener('click',()=>{
            let foodDetails=card.querySelector('.food-details')
            console.log(card);
            let foodId=foodDetails.dataset.recipeId
            console.log(foodId);
            document.getElementById(`${foodId}`).style.display='grid'
        })
    })
}

