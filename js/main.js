let elMenuBtn = document.getElementById('shop-by-btn');
let elMenuBox = document.getElementById('shop-by-box');
let elMenuRemov = document.getElementById('shop-by-remov')

elMenuBtn.addEventListener('click', function () {
  elMenuBox.classList.add('btn-shop-by-depar');
})

elMenuBtn.addEventListener('click', function () {
  elMenuBox.classList.toggle('shop-by-remov');
})


let elheadFormBtn = document.getElementById('open-search-in');
let elheadFormBox = document.getElementById('head-form');
let elheadFormRemov = document.getElementById('head-form')

elheadFormBtn.addEventListener('click', function () {
  elheadFormBox.classList.add('head-form-open-btn');
})

elheadFormBtn.addEventListener('click', function () {
  elheadFormBox.classList.toggle('head-form-remov-btn');
})



// MODAL RESPONSIVE MENU PARTS 

let elResModalOpen = document.getElementById('res-modal-btn');
let elResModalBox = document.getElementById('res-modal-box');
let elResModalRemov = document.getElementById('remov-res-modal')

elResModalOpen.addEventListener('click', function () {
  elResModalBox.classList.add('res__modal-open');
})

elResModalRemov.addEventListener('click', function () {
  elResModalBox.classList.remove('res__modal-open');
})


// MODAL ONE

let elResOpen = document.getElementById('home-res-btn');
let elResBox = document.getElementById('res-one-box');
let elResRemov = document.getElementById('remov-res-btn-one')

elResOpen.addEventListener('click', function () {
  elResBox.classList.add('res-open-one');
})

elResRemov.addEventListener('click', function () {
  elResBox.classList.remove('res-open-one');
})


// MODAL TWO 

let elResOpenTwo = document.getElementById('shop-btn');
let elResBoxTwo = document.getElementById('res-two-box');
let elResRemovTwo = document.getElementById('remov-res-btn-two')

elResOpenTwo.addEventListener('click', function () {
  elResBoxTwo.classList.add('res-two-open');
})

elResRemovTwo.addEventListener('click', function () {
  elResBoxTwo.classList.remove('res-two-open');
})


// MODAL THRE 

let elResOpenThre = document.getElementById('pages-btn');
let elResBoxThre = document.getElementById('res-box-thre');
let elResRemovThre = document.getElementById('remov-res-btn-thre')

elResOpenThre.addEventListener('click', function () {
  elResBoxThre.classList.add('res-open-thre');
})

elResRemovThre.addEventListener('click', function () {
  elResBoxThre.classList.remove('res-open-thre');
})