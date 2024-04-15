
const themeSwitch=document.querySelector('.right-nav input')
themeSwitch.addEventListener('click',()=>{
document.body.classList.toggle('darktheme')
if(document.body.classList.contains('darktheme')){
    document.querySelector('.logo img').src='./images/logo-dark.svg'
}
else{
    document.querySelector('.logo img').src='./images/logo-light.svg'
}

})
