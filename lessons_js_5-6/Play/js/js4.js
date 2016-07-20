var count=0, timerId;
cell_11.addEventListener("click",step);
cell_12.addEventListener("click",step);
cell_13.addEventListener("click",step);

cell_21.addEventListener("click",step);
cell_22.addEventListener("click",step);
cell_23.addEventListener("click",step);

cell_31.addEventListener("click",step);
cell_32.addEventListener("click",step);
cell_33.addEventListener("click",step);

function step (){
  this.classList.add('x');

}
