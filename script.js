const endDate = "24 December 2023 00:00"
document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");
function clock(){
  const end = new Date(endDate);
  const now = new Date();
  const diff = (end-now)/1000;

  if(diff <0) return;

  inputs[0].value = Math.floor(diff/3600/24); //days
  inputs[1].value =  Math.floor(diff / 3600) %24; //hours
  inputs[2].value = Math.floor(diff / 60) %60;
  inputs[3].value = Math.floor(diff) %60;

}
clock();

setInterval(
  () => {
    clock();
  },
  1000
)
