start.addEventListener("click",start_click);
pause.addEventListener("click",pause_click);
stp.addEventListener("click",stp_click);

var count=0, timerId;

function start_click(){
  for_text.innerHTML="start_click";
  timerId = setInterval(function() {
    count++;
    for_count.innerHTML=count;
  }, 1);

}
function pause_click(){
  for_text.innerHTML="pause_click";
}
function stp_click(){
  clearInterval(timerId);
  for_text.innerHTML="stp_click";
}
