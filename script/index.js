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



/* Best, New Product 탭메뉴 active 클래스 이동 */
$('.best_menu li').click(function(){
    $('.best_menu li').removeClass("active");
    $(this).addClass("active");
})
$('.new_product .new_menu li').click(function(){
    $('.new_product li').removeClass("active");
    $(this).addClass("active");
})
/* Best, New 탭메뉴 클릭시 해당 슬라이드 보여지기 */
const bstap=document.querySelectorAll('.best_seller .contents_title li')
const nptap=document.querySelectorAll('.new_product .contents_title li')
console.log(bstap, nptap)
const bsSwiper=document.querySelectorAll('.bs_box .pb')
const npSwiper=document.querySelectorAll('.np_box .pb')
console.log(bsSwiper, npSwiper)

function hideBsProduct() {
    bsSwiper.forEach(view => {
        view.style.display = 'none';
    });
}
bstap.forEach((item, index) => {
    item.addEventListener('click', function() {
        // 모든 Swiper 숨기기
        hideBsProduct();
        // 해당 index의 Swiper 보이기
        bsSwiper[index].style.display = 'block';
    });
});

function hideNpProduct() {
    npSwiper.forEach(view => {
        view.style.display = 'none';
    });
}

nptap.forEach((item, index) => {
    item.addEventListener('click', function() {
        // 모든 Swiper 숨기기
        hideNpProduct();
        // 해당 index의 Swiper 보이기
        npSwiper[index].style.display = 'block';
    });
});



/* best, new product swiper */

const bsAllSwiper = new Swiper('.bs_all_swiper', {
    autoplay: {
        delay: 3000,
    },
    loop: true,
    slidesPerView: 4,
    spaceBetween: 26,
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});
const bsMakeUpSwiper = new Swiper('.bs_makeup_swiper',{
    autoplay:{
        delay:3000,
    },
    loop:true,
    slidesPerView:4,
    spaceBetween:26,
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});
const bsSkincareSwiper = new Swiper('.bs_skincare_swiper',{
    autoplay:{
        delay:3000,
    },
    loop:true,
    slidesPerView:4,
    spaceBetween:26,
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});
const npAllSwiper = new Swiper('.np_all_swiper',{
    autoplay:{
        delay:3000,
    },
    loop:true,
    slidesPerView:4,
    spaceBetween:26,
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});
const npMakeUpSwiper = new Swiper('.np_makeup_swiper',{
    autoplay:{
        delay:3000,
    },
    loop:true,
    slidesPerView:4,
    spaceBetween:26,
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});
const npSkincareSwiper = new Swiper('.np_skincare_swiper',{
    autoplay:{
        delay:3000,
    },
    loop:true,
    slidesPerView:4,
    spaceBetween:26,
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});

/* collection list */
$('.collection_list .crt_content').hide();
$('.collection_list .list_active').siblings('.crt_content').show();
$('.crt_title').children('.crt_hover').hide();
$('.list_active').children('.crt_hover').show();
$('.crt_title').click(function(){
    // 다른 항목의 active 제거 & hover 숨기기
    $('.crt_title').removeClass("list_active");
    $('.crt_title').children('.crt_hover').hide();
    // 현재 클릭한 항목 활성화 & hover 표시
    $(this).addClass("list_active");
    $(this).children('.crt_hover').show();
    // 모든 .crt_content 숨기기 (현재 클릭한 항목의 다음 요소는 제외)
    $('.crt_content').not($(this).next('.crt_content')).slideUp();
    // 현재 선택한 .crt_content가 닫혀 있으면 열기
    if (!$(this).next('.crt_content').is(":visible")) {
        $(this).next('.crt_content').slideDown();
    }
})
const collectionView=document.querySelectorAll('.view_box')
const collectionList=document.querySelectorAll('.collection_list li')
function hideAllViews() {
    collectionView.forEach(view => {
        view.style.display = 'none';
    });
}

// 모든 리스트 항목에 클릭 이벤트 추가
collectionList.forEach((item, index) => {
    item.addEventListener('click', function() {
        // 모든 view_box 숨기기
        hideAllViews();
        // 해당 index의 view_box 보이기
        collectionView[index].style.display = 'block';
    });
});