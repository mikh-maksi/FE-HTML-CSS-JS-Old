'use strict';
var  qq = 4, tmp_str = "";
var txt = localStorage.getItem('one');
var data = JSON.parse(txt);

for (i = 0; i < qq; i++){
  tmp_str +=
  '<div class="question">' +
  '<h3>'+ (i + 1) +'.&nbsp' + data[i].top + '</h3>' +
  '<h3><code>' + data[i].ask + '</code></h3>' +

  '<h3><ol><li><input type="checkbox" value="1'+ i +'">' +
  '<code>'+ data[i].answer1 + '</code></input></li>' +

  '<li><input type="checkbox" value="2'+ i +'"">' +
  '<code>'+ data[i].answer2 + '</code></input></li>' +

  '<li><input type="checkbox" value="3'+ i +'"">' +
  '<code>'+ data[i].answer3 + '</code></input>'+

  '</li></ol></h3></div><hr>';
}

var templ = _.template('<div class="container-fluid wrapper">'+
'<h1>Тест по основам JavaScript.</h1>' +
// <form ---------------------------------
'<form action="#" method="POST" name="list_questions"><div class="question">' +
'<%= tmp_str %>' +
'<button type="submit" class="btn btn-primary btn-lg" data-toggle="modal"' +
' data-target="#myModal" id="go-to">Проверить мои результаты</button>' +
'</div>'
);

var res =templ(data);
document.write(res);

// localStorage.clear();
