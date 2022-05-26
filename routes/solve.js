var express = require('express');
var router = express.Router();

const ChangeTypes = require('mathsteps/lib/ChangeTypes');
const factor = require('mathsteps/lib/factor');
const simplifyExpression = require('mathsteps/lib/simplifyExpression');
const solveEquation = require('mathsteps/lib/solveEquation');

module.exports = {
  factor,
  simplifyExpression,
  solveEquation,
  ChangeTypes,
};

/* GET home page. */
router.post('/', function(req, res, next){
    expression = req.body.input_expression;
    steps = solveEquation(expression);
    res.render('solution_equation', { expression: expression, steps: steps });
});

module.exports = router;