const burgerIcon = document.querySelector(".at-menu__btn");
const burger = document.querySelector(".at-menu");
const burgerList = document.querySelector(".at-menu__list");

burgerIcon.onclick = ()=>  {
    burger.classList.toggle("at-menu-toggle");
    if(burger.classList.contains("at-menu-toggle")) {
    }
    else {
        document.body.style.overflow = "auto";
    }

    window.addEventListener("click",closeburger);
    function closeburger(e){
        const target = e.target;
        console.log("1");
        if (!target.closest(".at-menu__btn") && target != burgerList) {
            burger.classList.remove("at-menu-toggle");
            window.removeEventListener("click",closeburger);
        }
    };
};


