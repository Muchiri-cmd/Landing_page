const addEventOnElement=function(elements,eventType,callback){
    for(let i=0,len=elements.length;i<len;i++){
        elements[i].addEventListener(eventType,callback);
    }
}

/*Navbar*/
const navBar=document.querySelector("[data-navbar]");
const navToggleBtn=document.querySelector("[data-nav-toggle-btn");

const toggleNavbar=function(){
    navBar.classList.toggle("active");
    navToggleBtn.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventOnElement([navToggleBtn],"click",toggleNavbar)

/*Parallax*/
const parallaxElements = document.querySelectorAll("[data-parallax]");
window.addEventListener("mousemove", event => {
    for (let i = 0, len = parallaxElements.length; i < len; i++) {
        const movementX = (event.clientX / window.innerWidth) * Number(parallaxElements[i].dataset.parallaxSpeed);
        const movementY = (event.clientY / window.innerHeight) * Number(parallaxElements[i].dataset.parallaxSpeed);
        parallaxElements[i].style.transform = `translate(${movementX}px, ${movementY}px)`;
    }
});
