var app = require ('../js/app.js');
var ls = require ('../js/ls.js');
describe("ls", function() {
  it("topic", function() {
    //prepear
    var result;
    //act
    //console.log(app);
    var flag = 0;
    for (var i=0;i<ls.length;i++)
    {if (ls[i].true_answer.length!=3) flag = 1;}
    //result = ls[0].true_answer.length;
    result = flag;
    //assert
    expect(result).toEqual(0); //
  //  expect(result).not.toEqual('Hello, Vasya!'); //
//    expect(result).toBe('Hello, Vasya'); //строгое сравнение, ссылаются ли на один объект
  })
});

describe("app1", function() {
  it("it should call say hello method", function() {
    //prepear
    var result;
    //act
    //console.log(app);
    result = app.sayHello('Vasya');
    //assert
    expect(result).toEqual('Hello, Vasya!'); //
  //  expect(result).not.toEqual('Hello, Vasya!'); //
//    expect(result).toBe('Hello, Vasya'); //строгое сравнение, ссылаются ли на один объект
  });

    it("sum", function() {
      //prepear
      var result;
      //act
      //console.log(app);
      result = app.sum(1,2);
      //assert
      expect(result).toEqual(3); //
  //    expect(result).toBe('Hello, Vasya'); //строгое сравнение, ссылаются ли на один объект
    });
});
