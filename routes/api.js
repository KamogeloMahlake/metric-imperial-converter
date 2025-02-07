'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();
  app.route("/api/convert").get((req, res) => {
    const {input} = req.query;
    if (!input) return res.send("invalid input");
    
    const initNum = convertHandler.getNum(input);
    const initUnit = convertHandler.getUnit(input);

    if (initNum === "invalid number" && initUnit === "invalid unit")
    {
      return res.send("invalid number and unit");
    }
    if (initNum === "invalid number") return res.send(initNum);
    if (initUnit === "invalid unit") return res.send(initUnit);

    const returnUnit = convertHandler.getReturnUnit(initUnit);
    const returnNum = convertHandler.convert(initNum, initUnit);
    const string = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);

    return res.json({initNum: initNum, initUnit: initUnit, returnNum: returnNum, returnUnit: returnUnit, string: string});
  });
};
