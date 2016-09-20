var app = require('../js/app.js');

describe("app", function() {
  it("call sayHello", function() {
	var result;
	result = app.sayHello('Jack');

    expect(result).toBe('Hello Jack');
  });
});