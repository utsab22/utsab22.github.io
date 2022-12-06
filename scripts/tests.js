describe("Title of the Test",function(){
  it("Description of the individual test",function(){
    assert.equal("Test Method","Test Method");
  });
});

describe("Test of sum Function", function () {
  it("Sum of [3, 5, 6] is 14", function () {
    assert.equal(sum([3, 5, 6]), 14);
  });
});

describe("Test of multiply function", function () {
  it("Multiple of [3, 5, 6] is 48", function () {
    assert.equal(multiply([3, 5, 6]), 90);
  });
});

describe("Test of reverse function", () => {
  it("Reverse of 'javascript' is 'tpircsavaj'", () => {
    assert.equal(reverse("javascript"), "tpircsavaj");
  });
});

describe("Test of filterLongWords function", () => {
  it("the words longer than length 3 in array ['turtles', 'apple', 'cat'] is ['turtles', 'apple']", () => {
    assert.equal(
      JSON.stringify(filterLongWords(['turtles', 'apple', 'cat'], 3)),
      JSON.stringify(['turtles','apple'])
    );
  });
});
