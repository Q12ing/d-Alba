const menuNav = document.querySelectorAll('nav ul .menu');
const menuDepth = document.querySelector('nav .depth_menu');
const topheader =document.querySelector('header');
console.log(menuDepth);
console.log(topheader);


menuNav.forEach(menu => {
    menu.addEventListener('mouseover', function () {
        menuDepth.style.display = 'block';
        topheader.style.backgroundColor = 'rgba(255,255,255,1)'
    });
});
menuDepth.addEventListener('mouseleave', function () {
    menuDepth.style.display = 'none';
    topheader.style.backgroundColor = 'rgba(255,255,255,0.3)'
});