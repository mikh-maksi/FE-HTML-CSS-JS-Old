var count=0, timerId;
in1.addEventListener("click",step);


function step (e){
  if (count%2==0){
    e.target.classList.add('x');
    count++;
  }
  else{
    e.target.classList.add('o');
    count++;
  }
  console.log();
}
