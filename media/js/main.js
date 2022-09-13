const btn = document.querySelector('.toggle-button');
const navitem = document.querySelector('.nav-item');

btn.addEventListener('click',()=>{
    navitem.classList.toggle('shown')
})