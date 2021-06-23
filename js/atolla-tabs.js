function openCity(evt, cityName) {
    var i, tabcontent, tabs__btn;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tabs__btn = document.getElementsByClassName("swiper__slide-btn");
    for (i = 0; i < tabs__btn.length; i++) {
        tabs__btn[i].className = tabs__btn[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "flex";
    evt.currentTarget.className += " active";

    document.getElementById("defaultOpen").click();
    document.getElementById("defaultOpen").style.opacity = "100%";
}
