// document는 body태그안에 작성된 모든 내용들을 지칭합니다
// 즉 문서를 지칭하는데 body안에 쓴 내용을 의미합니다.
// querySelectorsms ()안에 내용을 문서안에서 찾아줌
// =(등호)는 같다는 뜻이 아니라 왼쪽에 오른쪽의 내용을 대입하겠다는 의미입니다.
let btnCall = document.querySelector(".btnCall")
let menuMO = document.querySelector(".menuMo")
// btnCall을 클릭하면 btnCall과 menuMo의 요소에
// toggle이라는 메소트를 사용해서 on클래스를 없으면 붙여주고 있으면 떼어주는 이벤트 부여
btnCall.addEventListener("click",(e)=>{
    e.preventDefault();
    btnCall.classList.toggle("on");
    menuMO.classList.toggle("on");
})