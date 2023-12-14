let togglebtn = document.querySelector(".toggle-btn");
let navlinks = document.querySelector(".nav-links-res");

togglebtn.addEventListener("click",()=>{
    navlinks.classList.toggle("active");
    togglebtn.classList.toggle("ri-close-line")
    togglebtn.classList.toggle("ri-menu-line")
})
