function add(a, b) {
  return a + b;  
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a,b) {
  return a / b;
}

function inc(a) {
  return a += 1;  
}

function dec(a) {
  return a -= 1;
}

function makeInt(a) {
<<<<<<< HEAD
 return parseInt(a, 10);
}

function preserveDecimal(n) {
  return parseFloat(n);
}
=======
 return parseInt(a);
}

/*describe('makeInt(n)', function() {
  it('parses n as an integer and returns the parsed integer', function() {
    expect(makeInt(a.toString())).toEqual(a)
  })

  it('assumes base 10', function() {
    expect(makeInt('0x2328')).toEqual(0)
  })

  it('returns NaN as appropriate', function() {
    expect(isNaN(makeInt('sldkjflksjf'))).toEqual(true)
  })
})
>>>>>>> 1e9baa4807fb02df4246de06ff39b116820c7b60

/*
describe('preserveDecimal(n)', function() {
  it('preserves n\'s decimals (it parses n as a floating point number) and returns the parsed number', function() {
    expect(preserveDecimal('2.222')).toBe(2.222)
  })

  it('returns NaN as appropriate', function() {
    expect(isNaN(preserveDecimal('sldkjflksjf'))).toEqual(true)
  })
}) */

