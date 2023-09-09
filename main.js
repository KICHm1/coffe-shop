const hambuger = document.querySelector(".hambuger");
const nav = document.querySelector(".nav")
hambuger.addEventListener("click", ()=>{
    console.log('nav', nav)
    nav.classList.toggle("nav_out");
    nav.classList.toggle("nav_in");
})
document.addEventListener("click" , (e)=>{
    if(!nav.contains(e.target) && nav.classList.contains("nav_in") && !hambuger.contains(e.target)){
        nav.classList.toggle("nav_out");
        nav.classList.toggle("nav_in");
    }
})