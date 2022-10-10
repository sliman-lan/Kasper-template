var bullets = document.querySelectorAll(".landing .bullets > li ");
var skillsBullets = document.querySelectorAll(".our-skills .bullets > li");
var toggle= {
    main : ["90%", "85%", "82%", "74%"],
    prev : ["86%", "80%", "76%", "62%"],
    next : ["84%", "77%", "64%", "82%"]
};
var span = document.querySelectorAll(".prog-holder span");
var toggleMenu = document.querySelector(".toggle-menu");
bullets.forEach(li => {
    li.addEventListener("click" , function (e) { 
        bullets.forEach(rm => { rm.classList.remove('active') })
        e.target.classList.add("active");
        var landing = document.querySelector(".landing");
        landing.classList.forEach(l => {
            if(l !== "landing"){
                if(l !== e.target.dataset.bullet){
                    landing.classList.remove(l);
                    landing.classList.add(e.target.dataset.bullet);
                }
            }
        });
    });
});
skillsBullets.forEach(li => {
    li.addEventListener("click" , function (e) { 
        skillsBullets.forEach(rm => { rm.classList.remove('active') });
        e.target.classList.add("active");
        for(let i in toggle){
            if(i === e.target.dataset.toggle){
                for(let j = 0 ; j < 4 ; j++){
                    span[j].dataset.progress= toggle[i][j];
                    span[j].style.width= toggle[i][j];
                }
            }
        }
    });
});
toggleMenu.addEventListener("click", function () { 
    document.querySelector("header nav ul").classList.toggle("toggled");
});
function search() { 
    console.log(this)
}