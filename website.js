const showTime = document.querySelector(".time");

function calcTime() {
    let time = new Date();
    showTime.innerText = time.toLocaleTimeString("en-US", { hour12: true });
    setTimeout(calcTime, 1000);
  }
  
  calcTime();
