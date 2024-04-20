export function PopUp(){
    document.querySelectorAll('.recipe-div').forEach(page=>{
        page.addEventListener('click',(e)=>{
            if(e.target.classList.contains('close-tab')){
    let parentDiv=e.target.parentNode.parentNode.parentNode;
    parentDiv.style.display='none'
            }
        })
    })

    document.querySelectorAll('.card').forEach(card=>{
        card.addEventListener('click',()=>{
            let foodDetails=card.querySelector('.food-details')
            console.log(card);
            let foodId=foodDetails.dataset.recipeId
            console.log(foodId);
            document.getElementById(`${foodId}`).style.display='grid'
            document.getElementById(`${foodId}`).style.zIndex='7000'
        })
    })
}

PopUp()