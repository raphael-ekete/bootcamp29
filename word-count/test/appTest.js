const assert = require('chai').assert;
const app = require('../app');

describe("App", function(){

	it("should return {olly:2, on:1, fire:1} as Word-count for 'olly olly on fire'", function(){
		assert.equal(app('olly olly on fire'), '{"olly":2,"on":1,"fire":1}');
	});

	it("should return 'type error' as Word-count for 562", function(){
		assert.equal(app(562), 'type error');
	});

	it("should return 'type error' as Word-count for no argument", function(){
		assert.equal(app(), 'invalid');
	});

	it("should return 'type error' as Word-count for ''", function(){
		assert.equal(app(''), 'invalid');
	});

	it("should return 'type error' as Word-count for ' '", function(){
		assert.equal(app(' '), 'invalid');
	});
});
