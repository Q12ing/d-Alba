/* 쉐어 버튼 클릭 */
const share=document.querySelector('.share');
console.log(share);
share.addEventListener('click',()=>{
    window.alert('링크가 복사되었습니다.')
})


/* 섬네일 반응 */
const thumbnail = document.querySelectorAll('.thumbnail a img');
const bigImage = document.querySelector('.photo .big img');
console.log(thumbnail[0].src);
function bigSrc(num){
    return bigImage.src=`./images/b${num}.jpg`
}
thumbnail[0].addEventListener('mouseover',()=>{
    bigSrc(1);
});
thumbnail[1].addEventListener('mouseover',()=>{
    bigSrc(2);
});
thumbnail[2].addEventListener('mouseover',()=>{
    bigSrc(3);
});
thumbnail[3].addEventListener('mouseover',()=>{
    bigSrc(4);
});
thumbnail[4].addEventListener('mouseover',()=>{
    bigSrc(5);
});
thumbnail[5].addEventListener('mouseover',()=>{
    bigSrc(6);
});


/* 배송정보 */
const schedule = document.querySelector('.schedule');
const scheduleOpen = document.querySelector('.schedule_open');
console.log(schedule, scheduleOpen)
scheduleOpen.classList.add('hide');
schedule.addEventListener('click',(e)=>{
    e.preventDefault();
    scheduleOpen.classList.toggle('hide');
});

/* 셀렉트 옵션 */
const selectOption = document.querySelector('#capacity');
const op50ml=document.querySelector('.op50ml');
const op100ml=document.querySelector('.op100ml');
console.log (op50ml)
console.log(selectOption.innerText)
op50ml.style.display='none';
op100ml.style.display='none';
selectOption.addEventListener('change',function(){
    let selectedValue = selectOption.value;
    if (selectedValue == '50ml') {
        op50ml.style.display='block'
    }else if (selectedValue == '100ml'){
        op100ml.style.display='block'
    }
})

/* 총금액 */
let price50 = 27000; //주문금액
let number50 = 1; //주문수량
const plusBtn50 = document.querySelector('.plus50');//수량증가DOM
const minusBtn50 = document.querySelector('.minus50');//수량감소DOM
const orderPrice50 = document.querySelector('.op_total50')//최종주문표시DOM
let op50Num=document.querySelector('#op50ml_num');

let price100 = 34000; //주문금액
let number100 = 1; //주문수량
const plusBtn100 = document.querySelector('.plus100');//수량증가DOM
const minusBtn100 = document.querySelector('.minus100');//수량감소DOM
const orderPrice100 = document.querySelector('.op_total100')//최종주문표시DOM
let op100Num=document.querySelector('#op100ml_num');

/* =========================================★★옵션 통합 총 금액 JS 진행 중 */
const optionTotalPrice = document.querySelector('.order_price .total_price')
let totalPrice = 0; //총 가격 저장 변수
console.log(optionTotalPrice);
optionTotalPrice.innerText=totalPrice;
/* ==========================================★★★★★★★★★ */

plusBtn50.addEventListener('click',()=>{
    number50++; // 수량 증가
    op50Num.value = number50; // input 값 업데이트
    let total50 = number50 * price50; // 총 금액 계산
    orderPrice50.innerText = total50.toLocaleString('ko-kr');
    totalPrice += price50
    optionTotalPrice.innerText = totalPrice.toLocaleString('ko-kr');
})
minusBtn50.addEventListener('click',()=>{
    if(number50==1){
        window.alert('최소 수량은 1개 입니다.')
    }else{
        number50--;
        op50Num.value = number50;
        let total50=innerText=number50*price50;
        orderPrice50.innerText=total50.toLocaleString('ko-kr');
        totalPrice -= price50
        optionTotalPrice.innerText = totalPrice.toLocaleString('ko-kr');
    }
})
plusBtn100.addEventListener('click',()=>{
    number100++;
    op100Num.value = number100;
    let total100=innerText=number100*price100;
    orderPrice100.innerText=total100.toLocaleString('ko-kr');
    totalPrice += price100
    optionTotalPrice.innerText = totalPrice.toLocaleString('ko-kr');
})
minusBtn100.addEventListener('click',()=>{
    if(number100==1){
        window.alert('최소 수량은 1개 입니다.')
    }else{
        number100--;
        op100Num.value = number100;
        let total100=innerText=number100*price100;
        orderPrice100.innerText=total100.toLocaleString('ko-kr');
        totalPrice -= price100
        optionTotalPrice.innerText = totalPrice.toLocaleString('ko-kr');
    };
})

/* close 눌렀을 때 옵션닫기-제이쿼리 */
$('.close').click(function(){
    $(this).parent().parent().hide();
})


/* 장바구니 버튼 클릭 상호 작용 */
const cartPopup = document.querySelector('.cart_open_bg');
const cartBtn = document.querySelector('#cart_btn');
const shoppingBtn = document.querySelector('.cart_container .link a:nth-child(1)');
//1. 초기값 : 팝업 숨기기
cartPopup.style.display = 'none';
//2. 장바구니 클릭시
cartBtn.addEventListener('click',()=>{
    cartPopup.style.display = 'block'
});
//4. 팝업 내 '쇼핑 계속하기' 클릭 시
shoppingBtn.addEventListener('click',(e)=>{
    //5. 팝업 숨기기
    e.preventDefault();
    cartPopup.style.display = 'none';
    document.body.style.overflow = 'auto';
})