const ftoc = function (num1) {

  let c = (num1 - 32) * (5 / 9);
  if (c % 1 == 0){ return c;}
  else{
    return c.toFixed(1);
  }

}

const ctof = function (num1) {
  let f = (num1 * (9/5)) + (32);
  if (f % 1 == 0){ return f;}
  else{
    return f.toFixed(1);
  }
}

module.exports = {
  ftoc,
  ctof
}
