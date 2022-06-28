var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  const a = 1;
  console.log(a);
  res.send('respond with a resource');
});

router.get('/other', function (req, res, next) {
  const a = 1;
  console.log(a);
  res.send('respond with a resource');
});

router.get('/other1', function (req, res, next) {
  const a = 1;
  console.log(a);
  res.send('respond with a resource');
});

router.get('/other2', function (req, res, next) {
  const a = 1;
  console.log(a);
  res.send('respond with a resource');
});

router.get('/other3', function (req, res, next) {
  const a = 1;
  console.log(a);

  manyArguments(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11);

  reallyBigFunction()

  insertCodeSmell(1)

  insertBug(2)

  res.send('respond with a resource');
});

function manyArguments(a, b, c, d, e, f, g, h, i, j, k) {
  console.log(a, b, c, d, e, f, g, h, i, j, k)
}


function reallyBigFunction() {
  for (const a = 0; a < 100; a++) {
    console.log(a)
  }

  for (const a = 0; a < 100; a++) {
    console.log(a)
  }

  for (const a = 0; a < 100; a++) {
    console.log(a)
  }

  for (const a = 0; a < 100; a++) {
    console.log(a)
  }

  for (const a = 0; a < 100; a++) {
    console.log(a)
  }

  for (const a = 0; a < 100; a++) {
    console.log(a)
  }

  for (const a = 0; a < 100; a++) {
    console.log(a)
  }

  for (const a = 0; a < 100; a++) {
    console.log(a)
  }

  for (const a = 0; a < 100; a++) {
    console.log(a)
  }

  for (const a = 0; a < 100; a++) {
    console.log(a)
  }

  for (const a = 0; a < 100; a++) {
    console.log(a)
  }

  for (const a = 0; a < 100; a++) {
    console.log(a)
  }

  for (const a = 0; a < 100; a++) {
    console.log(a)
  }

  for (const a = 0; a < 100; a++) {
    console.log(a)
  }

  for (const a = 0; a < 100; a++) {
    console.log(a)
  }

  for (const a = 0; a < 100; a++) {
    console.log(a)
  }

  for (const a = 0; a < 100; a++) {
    console.log(a)
  }

  for (const a = 0; a < 100; a++) {
    console.log(a)
  }

  for (const a = 0; a < 100; a++) {
    console.log(a)
  }

  for (const a = 0; a < 100; a++) {
    console.log(a)
  }

  for (const a = 0; a < 100; a++) {
    console.log(a)
  }

  for (const a = 0; a < 100; a++) {
    console.log(a)
  }

  for (const a = 0; a < 100; a++) {
    console.log(a)
  }

  for (const a = 0; a < 100; a++) {
    console.log(a)
  }

  for (const a = 0; a < 100; a++) {
    console.log(a)
  }

  for (const a = 0; a < 100; a++) {
    console.log(a)
  }

  for (const a = 0; a < 100; a++) {
    console.log(a)
  }
}

function insertCodeSmell(a) {
  if (a == 2) {
    return true;
  } else {
    return false;
  }
}

function insertBug(a) {
  if (a === NaN) {
    return true;
  } else {
    return false;
  }
}

module.exports = router;
