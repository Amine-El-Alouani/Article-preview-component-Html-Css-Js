const tooltip = document.querySelector(".tooltip")
const shareBtn = document.querySelector(".fa-share")


shareBtn.addEventListener('click', function(){
     tooltip.classList.toggle('active')
})