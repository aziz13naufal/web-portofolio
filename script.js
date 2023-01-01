const toggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');
const switchBtn = document.querySelector('div .switch-btn');


toggle.addEventListener('click', () => {
    nav.classList.toggle('slide');
});

switchBtn.addEventListener('click', () => {
    console.log('OK');
})
