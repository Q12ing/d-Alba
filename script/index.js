/* main bnr swiper */
const mainDot = document.querySelectorAll('.main_bnr .main_dot li');
const mainSwiper = new Swiper('.main_swiper',{
    autoplay:{
        delay:3000,
    },
    loop:true,
    effect:'fade',
    on: {
        slideChange: function (e) {
            // 모든 dot에서 dot_active 클래스 제거
            mainDot.forEach(dot => dot.classList.remove('dot_active'));
            // 현재 활성화된 슬라이드에 맞는 dot에 클래스 추가
            mainDot[e.realIndex].classList.add('dot_active');
        },
    },
})
mainDot.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        mainSwiper.slideToLoop(index);
    });
});


/* best, new product swiper */
function productSettings() {
    return {
        autoplay:{
            delay:10000,
        },
        loop:true,
        slidesPerView:4,
        spaceBetween:26
    };
}
const bsAllSwiper = new Swiper('.bs_all_swiper',productSettings());
const bsMakeUpSwiper = new Swiper('.bs_makeup_swiper',productSettings());
const bsSkincareSwiper = new Swiper('.bs_skincare_swiper',productSettings());
const npAllSwiper = new Swiper('.np_all_swiper',productSettings());
const npMakeUpSwiper = new Swiper('.np_makeup_swiper',productSettings());
const npSkincareSwiper = new Swiper('.np_skincare_swiper',productSettings());

/* best, new product progress bar */
const pbProgress = document.querySelectorAll ('.active_progress_bar');
function progressBar() {
    return {};
}
for(let i in pbProgress){console.log(i);}