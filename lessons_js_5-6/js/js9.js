var count=0, timerId, x,y;
var field_arr = [[0,0,0],[0,0,0],[0,0,0]];
console.log(field_arr);

in1.addEventListener("click",step);

function cell_number(cell){
  var n;
  if (cell=="cell_11") n = 1;
  if (cell=="cell_12") n = 2;
  if (cell=="cell_13") n = 3;
  if (cell=="cell_21") n = 4;
  if (cell=="cell_22") n = 5;
  if (cell=="cell_23") n = 6;
  if (cell=="cell_31") n = 7;
  if (cell=="cell_32") n = 8;
  if (cell=="cell_33") n = 9;
  return n;
}
function game_check (arr){
  var i,j,out=0,flag=0;
//Вертикали
  if (arr[0][0]==1&&arr[0][1]==1&&arr[0][2]==1) out = 1;
  if (arr[1][0]==1&&arr[1][1]==1&&arr[1][2]==1) out = 1;
  if (arr[2][0]==1&&arr[2][1]==1&&arr[2][2]==1) out = 1;
//Горизонтали
  if (arr[0][0]==1&&arr[1][0]==1&&arr[2][0]==1) out = 1;
  if (arr[0][1]==1&&arr[1][1]==1&&arr[2][1]==1) out = 1;
  if (arr[0][2]==1&&arr[1][2]==1&&arr[2][2]==1) out = 1;
//Диагонали
  if (arr[0][0]==1&&arr[1][1]==1&&arr[2][2]==1) out = 1;
  if (arr[0][2]==1&&arr[1][1]==1&&arr[2][0]==1) out = 1;

  //Вертикали
    if (arr[0][0]==2&&arr[0][1]==2&&arr[0][2]==2) out = 2;
    if (arr[1][0]==2&&arr[1][1]==2&&arr[1][2]==2) out = 2;
    if (arr[2][0]==2&&arr[2][1]==2&&arr[2][2]==2) out = 2;
  //Горизонтали
    if (arr[0][0]==2&&arr[1][0]==2&&arr[2][0]==2) out = 2;
    if (arr[0][1]==2&&arr[1][1]==2&&arr[2][1]==2) out = 2;
    if (arr[0][2]==2&&arr[1][2]==2&&arr[2][2]==2) out = 2;
  //Диагонали
    if (arr[0][0]==2&&arr[1][1]==2&&arr[2][2]==2) out = 2;
    if (arr[0][2]==2&&arr[1][1]==2&&arr[2][0]==2) out = 2;


  for(i=0;i<3;i++){
    for(j=0;j<3;j++){
      if (arr[i][j]==0) flag = 1;
    }
  }
  if (out==0 && flag ==0) out=3;
  return out;
}

function step (e){
  if (count%2==0){
    if (!e.target.classList.contains('x')&&!e.target.classList.contains('o')){
    e.target.classList.add('x');
    count++;
    x = (cell_number(e.target.id)-1)%3;
    y = Math.floor((cell_number(e.target.id)-1)/3);
    field_arr[x][y]=1;
    console.log('x=',x,'y=',y);
        console.log(game_check(field_arr));
  }
  }
  else{
    if (!e.target.classList.contains('x')&&!e.target.classList.contains('o')){
    e.target.classList.add('o');
    count++;
    x = (cell_number(e.target.id)-1)%3;
    y = Math.floor((cell_number(e.target.id)-1)/3);
    field_arr[x][y]=2;
    console.log('x=',x,'y=',y);
    console.log(game_check(field_arr));
  }


  }
}
