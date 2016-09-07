//Не имеет значение какое имя файла и как назвается объект.
//Но необходимо, чтобы значение на 3 и 12 строке совпадало.
var appw = {
  sayHello: function (name){
    return 'Hello, '+ name+'!';
  },
  sum: function (a,b){
    return a+b;
  }

}
  try{   module.exports = appw; }
  catch (e)
  {

  }
