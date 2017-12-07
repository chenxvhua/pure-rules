var pure = require('./index.js');
var expect = require('expect.js');
describe('输入数字验证', function() {
    it('输入应该是最多8位整数，最多一位的小数', function() {
        expect(pure.inputNumberRange(8, 1,"22.1")).to.be.equal(true);
    });
});