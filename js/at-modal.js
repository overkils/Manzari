// function create_modal() {
//   let btn = document.querySelectorAll(".modal-btn");
//   let modal = document.querySelectorAll(".at-modal");
//   let dialog = document.querySelectorAll(".at-modal__dialog");
//   let close = document.querySelectorAll(".at-modal__close");

//   for (let i = 0; i < btn.length; i++) {
//     btn[i].addEventListener("click", function () {
//       modal[i].classList.add("show");

//       setTimeout(function () {
//         dialog[i].style.transform = "rotateX(0deg)";
//       }, 200);

//       document.addEventListener("click", function (event) {
//         if (event.target == modal[i] || event.target == close[i]) {
//           dialog[i].style.transform = "rotateX(90deg)";

//           setTimeout(function () {
//             modal[i].classList.remove("show");
//             return 0;
//           }, 200);
//         }
//       });
//     });
//   }
// }

let modal = document.querySelectorAll(".at-modal");

function close_modal() {
  modal[0].classList.remove("show");
}

function create_modal() {
    modal[0].classList.add("show"); 
}
