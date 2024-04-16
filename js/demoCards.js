let resultHTML=``
let i=0

function loadImages(){
    let lowlimit=i;
    let upperlimit=i+20;
    i=i+20

    for (j=lowlimit ; j < upperlimit; j++) {
        let card= document.createElement('div')
        card.className='card' 
        card.style.animationDelay = `${100 * (j%20)}ms`
        card.innerHTML=`
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
        `
        document.querySelector('.result-cards').appendChild(card)
     
        
    }
}
loadImages()
// -------------------Infinity loading-_------------------
window.addEventListener('scroll',()=>{
    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
        loadImages()
    }
})
