/* 쉐어 버튼 클릭 */
const share=document.querySelector('.share');
console.log(share);
share.addEventListener('click',()=>{
    window.alert('링크가 복사되었습니다.')
})

/* 배송정보 */
const schedule = document.querySelector('.schedule');
const scheduleOpen = document.querySelector('.schedule_open');
console.log(schedule, scheduleOpen)
scheduleOpen.classList.add('hide');
schedule.addEventListener('click',(e)=>{
    e.preventDefault();
    scheduleOpen.classList.toggle('hide');
});

/* 총금액 */
let price50 = 27000; //주문금액
let number50 = 0; //주문수량
let totalPrice50 = 0; //총 가격 저장 변수
const plusBtn50 = document.querySelector('.plus50');//수량증가DOM
const minusBtn50 = document.querySelector('.minus50');//수량감소DOM
const orderPrice50 = document.querySelector('.op_total50')//최종주문표시DOM
console.log(orderPrice50)

orderPrice50.innerText = price50*number50;

plusBtn50.addEventListener('click',()=>{
    number50++;
    orderPrice50.innerText=number50*price50;
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
    document.body.style.overflow = 'hidden';
});
//4. 팝업 내 '쇼핑 계속하기' 클릭 시
shoppingBtn.addEventListener('click',(e)=>{
    //5. 팝업 숨기기
    e.preventDefault();
    cartPopup.style.display = 'none';
    document.body.style.overflow = 'auto';
})