let nextbtn=document.getElementById('nextbtn')
let backbtn=document.getElementById('backbtn')
let display=document.querySelector('.gallary')

nextbtn.addEventListener("click",()=>{
    display.scrollLeft+=500;
    // display.style.scrollBehaviour="smooth"
})
backbtn.addEventListener("click",()=>{
    display.scrollLeft-=500;
    display.style.scrollBehaviour="smooth"
})