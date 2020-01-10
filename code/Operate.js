module.exports.function = function operate (leftOperand, rightOperand, operator) {

  var console = require('console');

  console.log(operator);
  console.log(leftOperand);
  console.log(rightOperand);

  operator = String(operator);

  switch (operator) {
    case "plus" :
      var Result = leftOperand + rightOperand;
      console.log('plus');
      break;
    case "minus" :
      var Result = leftOperand - rightOperand;
      break;
    case "multiply" :
      var Result = leftOperand * rightOperand;
      break;
    case "division" :
      var Result = leftOperand / rightOperand;
      break;
  }

  return Result;
}
