// При нажатии на кнопку появляется блок с карточкой
// Блоки кнопок
const center_btn_z = document.getElementById("center_btn-zz")
const center_btn_o = document.getElementById("center_btn-oo")
const center_btn_r = document.getElementById("center_btn-rr")
const center_btn_s = document.getElementById("center_btn-ss")

// Блоки карточек
let div_z = document.querySelector('.card-z');
let div_o = document.querySelector('.card-o');
let div_r = document.querySelector('.card-r');
let div_s = document.querySelector('.card-s');

// Функция, меняющая видимость блока с карточкой
center_btn_z.addEventListener('click', () => {
    div_z.style.display = getComputedStyle(div_z).display == 'block' ? 'none' : 'block';     
  });

center_btn_o.addEventListener('click', () => {
    div_o.style.display = getComputedStyle(div_o).display == 'block' ? 'none' : 'block';
  });


center_btn_r.addEventListener('click', () => {
    div_r.style.display = getComputedStyle(div_r).display == 'block' ? 'none' : 'block';
  });

center_btn_s.addEventListener('click', () => {
    div_s.style.display = getComputedStyle(div_s).display == 'block' ? 'none' : 'block';
  });