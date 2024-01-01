const togglebtn=document.getElementById('toggle-bar');
const navLinks=document.getElementById('nav-links')

togglebtn.addEventListener('click',()=>{
    navLinks.classList.toggle('active')
})
let btn=document.getElementsByClassName("btn")
let slide=document.getElementById("slide")
let counter=0;
btn[0].onclick=function(){
    slide.style.transform="translateX(0px)"
    for(i=0;i<4;i++){
        btn[i].classList.remove("active")
    }
    this.classList.add("active")
    counter=0;
}
btn[1].onclick=function(){
    slide.style.transform="translateX(-800px)"
    for(i=0;i<4;i++){
        btn[i].classList.remove("active")
    }
    this.classList.add("active")
    counter=1;
}
btn[2].onclick=function(){
    slide.style.transform="translateX(-1600px)"
    for(i=0;i<4;i++){
        btn[i].classList.remove("active")
    }
    this.classList.add("active")
    counter=2;
}
btn[3].onclick=function(){
    slide.style.transform="translateX(-2400px)"
    for(i=0;i<4;i++){
        btn[i].classList.remove("active")
    }
    this.classList.add("active")
    counter=3;
}

// automatic

setInterval(function(){
    let val=-800;
    // slide.style.transform="translateX(${0+val})"
    slide.style.transform = `translateX(${0 + val*counter}px)`;

    for(i=0;i<4;i++){
        btn[i].classList.remove("active")
    }
    btn[counter].classList.add("active")
    counter++;
    if(counter==4)
    counter=0

},5000);