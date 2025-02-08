const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', () => {
    // #1
    test('whole number', () => {
        assert.equal(convertHandler.getNum('10ki'), 10);
        assert.equal(convertHandler.getNum('8'), 8);

    });
    // #2
    test('decimal number', () => {
        assert.equal(convertHandler.getNum('1.1mi'), 1.1);
        assert.equal(convertHandler.getNum('10.58mi'), 10.58);

    })
    // #3
    test('fractional input', () => {
        assert.equal(convertHandler.getNum('5/2'), 5 / 2);
        assert.equal(convertHandler.getNum('10/5lbs'), 2);
        assert.equal(convertHandler.getNum('1/1/1'), 'invalid number');
    })
    // #4
    test('fractional input with decimal', () => {
        assert.equal(convertHandler.getNum('52.2/2.2'), 52.2/2.2);
        assert.equal(convertHandler.getNum('5.5/52/2.3'), 'invalid number');
    })
    // #5
    test('error for double-fraction', () => {
        assert.equal(convertHandler.getNum('5.5/52/2.3'), 'invalid number');
        assert.equal(convertHandler.getNum('1/1/1'), 'invalid number');
    })
    // #6
    test('default 1', () => {
        assert.equal(convertHandler.getNum('e'), 1);
        assert.equal(convertHandler.getNum(''), 1)
    })
    // #7
    test('valid unit', () => {
        assert.equal(convertHandler.getUnit('1gal'), 'gal');
        assert.equal(convertHandler.getUnit('3L'), 'L');
    })
    // #8
    test('return error for invalid unit', () => {
        assert.equal(convertHandler.getUnit('asa'), 'invalid unit');
    })
    // #9
    test('return spellout unit', () => {
        assert.equal(convertHandler.spellOutUnit('l'), 'L');
    })
    // #10
    test("Converting gal to L", () => {
        assert.equal(convertHandler.convert(2, "gal"), 7.57082,);
    });
    // #11  
    test("Converting L to gal", () => {
        assert.equal(convertHandler.convert(2, "L"), 0.52834);
      });
    // #12
    test("Converting mi to km", () => {
        assert.equal(convertHandler.convert(2, "mi"), 3.21868);
      });
    // #13
    test("Converting km to mi", () => {
        assert.equal(convertHandler.convert(2, "km"), 1.24275);
      });
    // #14
    test("Converting lbs to kg", () => {
        assert.equal(convertHandler.convert(2, "lbs"), 0.90718);
      });
    // #15
    test("Converting kg to lbs", () => {
        assert.strictEqual(convertHandler.convert(2, "kg"), 4.40925);
      });
    // #16
    test('return correct return unit', () => {
        assert.equal(convertHandler.getReturnUnit('km'), 'mi')
    })
    
});