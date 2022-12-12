describe("String filter function with banned words", function () {
  it("Removes the word 'not' from the input string", function () {
    let inStr = "This house is not nice!";
    let expextedOutStr = "This house is nice!";
    assert.equal(inStr.filter("not"), expextedOutStr);
  });
});

describe("Array bubble sort", function () {
  it("sorting the array [6,4,0, 3,-2,1] using bubble sort", function () {
    let input = [6, 4, 0, 3, -2, 1];
    let xptdOutput = [-2, 0, 1, 3, 4, 6];
    assert.equal(input.bubbleSort().join(), xptdOutput.join());
  });
});
