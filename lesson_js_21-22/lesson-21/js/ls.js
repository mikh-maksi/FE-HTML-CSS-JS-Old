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
  true_answer: '1111'
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


try{   module.exports = topic; }
catch (e)
{

}
