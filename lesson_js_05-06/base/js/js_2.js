start.addEventListener("click",start_click);
pause.addEventListener("click",pause_click);
stp.addEventListener("click",stp_click);

var count=0, timerId,go=0;
function start_click(){
  for_text.innerHTML="start_click";
  if (go==0){
  timerId = setInterval(function() {
  count+=5;
  for_count.innerHTML=count;
  }, 5);
  go=1;
}
}
function pause_click(){
  clearInterval(timerId);
  go=0;
  for_text.innerHTML="pause_click";
}

function stp_click(){
  clearInterval(timerId);
  go=0;
  count = 0;
  for_count.innerHTML=count;
  for_text.innerHTML="stp_click";
}
