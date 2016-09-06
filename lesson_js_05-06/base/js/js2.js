var count=0, timerId;

//in1.onkeydown = in1.onkeyup = in1.onkeypress = handle;
document.onkeydown = document.onkeyup = document.onkeypress = document.onclick= handle;

function handle (e){
  var text = e.type +
    ' keyCode=' + e.keyCode +
    ' which=' + e.which +
    ' charCode=' + e.charCode +
    ' char=' + String.fromCharCode(e.keyCode || e.charCode) +"\n";
    for_text.innerHTML=text;
    var text = e.clientX+" "+e.clientY;
    for_count.innerHTML=text;
}
