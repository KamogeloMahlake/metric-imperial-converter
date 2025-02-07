function ConvertHandler() {
  const galToL = 3.78541;
  const lbsToKg = 0.453592;
  const miToKm = 1.60934;
  
  const units = {
    gal: ["L", galToL, "gallons"],
    L: ["gal", 1 / galToL, "liters"],
    mi: ["km", miToKm, "miles"],
    km: ["mi", 1 / miToKm, "kilometers"],
    lbs: ["kg", lbsToKg, "pounds"],
    kg: ["lbs", 1 / lbsToKg, "kilograms"]
  }
  
  this.getNum = function(input) {
    const array = input.split("/");
    if (array.length > 2) return "invalid number"
    else
    {
      let number = array.length === 2 ? array[1].split("") : input.split("");
      let finalNumber = "";
      for (const x of number)
      {
        if (x === ".") finalNumber += x;
        else if (Number(x)) finalNumber += x;
      }

      if (array.length === 2) return +array[1] / +finalNumber;
      if (finalNumber === 0) return 1;
      return isNaN(+finalNumber) ? "invalid number" : +finalNumber      
    }
  };
  
  this.getUnit = function(input) {
    const regex = /[a-zA-Z]/;
    const array = input.split("");
    let unit = "";

    array.forEach(c => {
      if (regex.test(c)) unit += c;
    })

    if (unit.length === 0) return "invalid unit"
    return this.spellOutUnit(unit);
  };
  
  this.getReturnUnit = function(initUnit) {
    return units[initUnit][0];
  };

  this.spellOutUnit = function(unit) {
    if (unit.toLowerCase() === "l") return "L";
    if (units.hasOwnProperty(unit.toLowerCase())) return unit.toLowerCase();
    return "invalid unit"    
  };
  
  this.convert = function(initNum, initUnit) {
    return Math.round(units[initUnit][1] * initNum * 1e5) / 1e5;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${units[initUnit][2]} converts to ${returnNum} ${units[returnUnit][2]}`;
  };
}

module.exports = ConvertHandler;
