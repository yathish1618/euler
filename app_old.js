const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




const mathsteps = require('mathsteps');
var steps = mathsteps.simplifyExpression('2x + 2x + x + x');
/* steps.forEach(step => {
  console.log(step.oldNode.toString());    // "2 x + 2 x + x + x"
  console.log(step.changeType);            // "ADD_POLYNOMIAL_TERMS"
  console.log(step.newNode.toString());    // "6 x"
  console.log(step.substeps.length);       // 3
}); */

var equation = '(2x + 3)/4 = (x+7) /3';
steps = mathsteps.solveEquation(equation);
console.log("equation: " + equation);
steps.forEach(step => {
    /* console.log("before change: " + step.oldEquation.ascii());  // e.g. before change: 2x + 3x = 35 */
    console.log("change: " + step.changeType);                  // e.g. change: SIMPLIFY_LEFT_SIDE
    console.log("after change: " + step.newEquation.ascii());   // e.g. after change: 5x = 35
    /* console.log("# of substeps: " + step.substeps.length);      // e.g. # of substeps: 2 */
});