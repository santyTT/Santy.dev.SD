document.addEventListener('DOMContentLoaded' = () => {
const menuToggle = document.querySelector('.menu-toggle');
const html = document.documentElement;
const menu = document.querySelector('nav ul');
const menuItems = document.querySelectorAll('.menu-animation');


menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active'); 
    html.classList.toggle('no-scroll');
});


menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        const targetId = e.target.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' }); 
        }

        menu.classList.remove('active');
        html.classList.remove('no-scroll');
    })
});
});

