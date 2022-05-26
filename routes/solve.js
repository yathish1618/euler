var express = require('express');
var router = express.Router();
var path = require('path');

const ChangeTypes = require(path.join(__dirname, '../mathsteps/lib/ChangeTypes'));
const factor = require(path.join(__dirname, '../mathsteps/lib/factor'));
const simplifyExpression = require(path.join(__dirname, '../mathsteps/lib/simplifyExpression'));
const solveEquation = require(path.join(__dirname, '../mathsteps/lib/solveEquation'));

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