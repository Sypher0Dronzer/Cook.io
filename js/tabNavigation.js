const tabList = document.querySelector(".tab-list").getBoundingClientRect();
let width = tabList.width;
document.querySelectorAll(
  ".tab-content-list .tab-content"
).forEach(tab=>{
    tab.style.width = `${width}px`;
})


window.addEventListener("resize", () => {
  const tabList = document.querySelector(".tab-list").getBoundingClientRect();
  width = tabList.width;
  document.querySelectorAll(
    ".tab-content-list .tab-content"
  ).forEach(tab=>{
      tab.style.width = `${width}px`;
  })

});

// ----------------active tab switching-----------------

document.querySelector('.tab-list').addEventListener('click',(e)=>{

  document.querySelector('.active-tab').classList.remove('active-tab')
  document.querySelector('.active-tab-content').classList.remove('active-tab-content')
  e.target.classList.add('active-tab')
  document.querySelectorAll('.tab-content').forEach(tab=>{
  
    if(tab.dataset.tabnumber==e.target.dataset.tabnumber){
      tab.classList.add('active-tab-content')
    }
  })
})

