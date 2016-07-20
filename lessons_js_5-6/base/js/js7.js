var count=0, timerId;
in1.addEventListener("click",step);


function step (e){
  if (count%2==0){
    if (!e.target.classList.contains('x')&&!e.target.classList.contains('o')){
    e.target.classList.add('x');
    count++;
  }
  }
  else{
    if (!e.target.classList.contains('x')&&!e.target.classList.contains('o')){
    e.target.classList.add('o');
    count++;
  }
  }
  console.log();
}
