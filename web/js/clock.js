const clock = document.querySelector("h2#clock");
const dates = document.querySelector("h2#dates");

// interval : '매번' 일어나야하는 무언가
function getClock(){
    const date = new Date();
    const years = String(date.getFullYear());
    const months = String(date.getMonth()+1).padStart(2, "0");
    const days = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    dates.innerText = (`${years}.${months}.${days}`);
    clock.innerText = (`${hours}:${minutes}:${seconds}`);
}

getClock(); //일단 켜자마자 바로 한 번 실행하고 싶어서 적음
setInterval(getClock, 1000/*ms*/); // 1초마다 getClock 실행
// setTimeout(getClock, 5000/*ms*/); // 5초 후에 getClock 한 번 실행
