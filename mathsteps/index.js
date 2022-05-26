const ChangeTypes = require('./lib/ChangeTypes');
const factor = require('./lib/factor');
const simplifyExpression = require('./lib/simplifyExpression');
const solveEquation = require('./lib/solveEquation');

module.exports = {
  factor,
  simplifyExpression,
  solveEquation,
  ChangeTypes,
};

var equation = '(2x + 3)/4 = (x+7) /3';
console.log("equation: " + equation);
steps = solveEquation(equation);
steps.forEach(step => {
    /* console.log("before change: " + step.oldEquation.ascii());  // e.g. before change: 2x + 3x = 35 */
    console.log("change: " + step.changeType);                  // e.g. change: SIMPLIFY_LEFT_SIDE
    console.log("				" + step.newEquation.ascii());   // e.g. after change: 5x = 35
    console.log("# of substeps: " + step.substeps.length);      // e.g. # of substeps: 2
		step.substeps.forEach(substep => {
		/* console.log("before change: " + step.oldEquation.ascii());  // e.g. before change: 2x + 3x = 35 */
		console.log("change: " + substep.changeType);                  // e.g. change: SIMPLIFY_LEFT_SIDE
		console.log("				" + substep.newEquation.ascii());   // e.g. after change: 5x = 35
		console.log("# of substeps: " + substep.substeps.length);      // e.g. # of substeps: 2
	});
});