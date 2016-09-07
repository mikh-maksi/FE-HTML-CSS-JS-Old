'use strict';
var qq = 4; // Quantity of Questions
var topic = [
  {
  top: "Какие варианты правильно объявляют функцию f, " +
  "возвращающую сумму двух аргументов ?",
  ask: "function User() {}<br>User.prototype = { admin: false };" +
  "<br>var user = new User();<br>alert(user.admin);>",
  answer1: 'var f = function(a,b) { return a+b }',
  answer2: 'var f = new Function("a,b", "return a+b")',
  answer3: 'var f = new Function("a", "b", "return a+b")',
  true_answer: '111'
  },
  {
  top: "Что выведет этот код?",
  ask: "function User() {}<br>User.prototype = { admin: false };" +
  "<br>var user = new User();<br>alert(user.admin);",
  answer1: 'false',
  answer2: 'undefined',
  answer3: 'true',
  true_answer: '100'
  },
   {
  top: "Какие вызовы parseInt возвратят число?",
  ask: "var y = 1;<br>var x = y = typeof x;<br>alert(x + 1);",
  answer1: 'parseInt("$1.2")',
  answer2: 'parseInt("0 минут")',
  answer3: 'parseInt("-1.2")',
  true_answer: '011'
  },
   {
  top: "Чему равен результат вызова в этом примере?",
  ask: "function f() {<br>var a = 5;<br>return new Function('b', " +
  "'return a + b');<br>}<br>alert( f()(1) );",
  answer1: 'Будет ошибка.',
  answer2: 1,
  answer3: 6,
  true_answer: '100'
  }
];
var str= JSON.stringify(topic);
localStorage.setItem('one', str);

// for testing answers
var str_true_answer = "";
for (var i = 0; i < qq; i++){
str_true_answer +=  topic[i].true_answer;
}
localStorage.setItem('two', str_true_answer);

// to modal window
var strAnswer = "<h2>Правильные ответы:</h2>" + "<br>";
for (var i = 0; i < qq; i++){
  var tmpObj = [topic[i].answer1, topic[i].answer2, topic[i].answer3];
    strAnswer += "" + (i + 1) + ":"+ "<br>";
  for (var j = 0; j < tmpObj.length; j++){
   strAnswer += (topic[i].true_answer[j] == 0) ? "" : tmpObj[j] + '<br>' ;
  }
  strAnswer += '<hr>';
}
localStorage.setItem('three', strAnswer);
