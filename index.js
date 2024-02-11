let time = 30;
function Yangivaqt() {
  let soat = Math.floor(time / 3600);
  let minut = Math.floor((time % 3600) / 60);
  let secund = time % 60;
  console.log(`${soat} : ${minut} : ${secund}`);
  time--;
  if (time < 0) {
    clearInterval(timer);
    console.log("Vaqt tugadi");
  }
}
let timer = setInterval(Yangivaqt, 1000);
