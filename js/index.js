function send(event, php) {    
    console.log("Отправка запроса");
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    var req = new XMLHttpRequest();
    req.open('POST', php, true);
    req.onload = function () {
        if (req.status >= 200 && req.status < 400) {
            json = JSON.parse(this.response); 
            json.result = "success"
            console.log(json);

            // ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
            if (json.result == "success") {
                // Если сообщение отправленo
                create_modal();
            } else {
                // Если произошла ошибка
                alert("Ошибка. Сообщение не отправлено");
            }
            // Если не удалось связаться с php файлом
        } else { alert("Ошибка сервера. Номер: " + req.status); }
    };

    // Если не удалось отправить запрос. Стоит блок на хостинге
    req.onerror = function () { alert("Ошибка отправки запроса"); };
    req.send(new FormData(event.target));
}

function openCity(evt, cityName) {
var i, tabcontent, tabs__btn;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tabs__btn = document.getElementsByClassName("tabs__btn");
    for (i = 0; i < tabs__btn.length; i++) {
        tabs__btn[i].className = tabs__btn[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "flex";
    evt.currentTarget.className += " active";

    document.getElementById("defaultOpen").click();
    document.getElementById("defaultOpen").style.opacity = "100%";
}

const btn = document.querySelector(".see-more");
const content = document.querySelector(".sea__content");

btn.addEventListener("click", btnClick);

function btnClick() {
    console.log(content.classList);

    if (content.classList.contains("nothing")) {
        btn.textContent = "Скрыть";
    } else {
        btn.textContent = "Еще";
    }

    content.classList.toggle("nothing");
}

var trns = document.getElementById('trns');

trns.addEventListener('click', () => {
    trns.classList.toggle('activet');
})

// < !--Creating and powerd by Overkills(Даниил), Iluas(Илья)-- >

