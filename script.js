const togglebtn=document.getElementById('toggle-bar');
const navLinks=document.getElementById('nav-links')

togglebtn.addEventListener('click',()=>{
    navLinks.classList.toggle('active')
})
let btn=document.getElementsByClassName("btn")
let slide=document.getElementById("slide")

btn[0].onclick=function(){
    slide.style.transform="translateX(0px)"
    for(i=0;i<4;i++){
        btn[i].classList.remove("active")
    }
    this.classList.add("active")
}
btn[1].onclick=function(){
    slide.style.transform="translateX(-800px)"
    for(i=0;i<4;i++){
        btn[i].classList.remove("active")
    }
    this.classList.add("active")
}
btn[2].onclick=function(){
    slide.style.transform="translateX(-1600px)"
    for(i=0;i<4;i++){
        btn[i].classList.remove("active")
    }
    this.classList.add("active")
}
btn[3].onclick=function(){
    slide.style.transform="translateX(-2400px)"
    for(i=0;i<4;i++){
        btn[i].classList.remove("active")
    }
    this.classList.add("active")
}

// let counter=0;
