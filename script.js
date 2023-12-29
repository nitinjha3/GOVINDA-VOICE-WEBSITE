const togglebtn=document.getElementById('toggle-bar');
const navLinks=document.getElementById('nav-links')

togglebtn.addEventListener('click',()=>{
    navLinks.classList.toggle('active')
})