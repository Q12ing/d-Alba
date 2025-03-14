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

/* 전체 a태그 새로고침 안되게 하기 */
const aTag=document.querySelectorAll('body a')
console.log(aTag[1]);

aTag.forEach(item => {
    item.addEventListener('click',function(e){
        e.preventDefault();
    })
});