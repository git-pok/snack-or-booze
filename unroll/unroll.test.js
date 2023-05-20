const unroll = require("./unroll");



describe("#unroll", function () {
  const square = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ];

  const smallerSquare = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"]
  ];

  const squareVar = [
    [1, 2, 3, 4, 20, 30],
    [5, 6, 7, 8, 19],
    [9, 10, 11, 12],
    [13, 14, 15, 16, 33, 44]
  ];

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

  it("returns traversed spiral square", function () {
    const finalArray = unroll(square);
    expect(finalArray).toEqual(
                        [
                          1, 2, 3, 4, 8, 12,
                          16, 15, 14, 13, 9, 5,
                          6, 7, 11, 10
                        ]
                      );
  });

  it("returns traversed spiral smallerSquare", function () {
    const finalArray = unroll(smallerSquare);
    expect(finalArray).toEqual(
                        [
                          "a", "b", "c", "f",
                          "i", "h", "g", "d", "e"
                        ]
                      );
  });

  it("returns traversed spiral squareVar", function () {
    const finalArray = unroll(squareVar);
    expect(finalArray).toEqual(
                        [
                          1, 2, 3, 4, 20, 30,
                          19, 12, 44, 33, 16,
                          15, 14, 13, 9, 5, 6,
                          7, 8, 11, 10
                        ]
                      );
  });

});

describe("#unroll edge cases", function () {
  const emptySquare = [];

  const objSquare = {
    one: [1, 2, 3],
    two: [6, 7, 8]
  };

  const number = 1;

  const string = "1, 2";

  it("returns error for empty array", function () {

    function emptyArrayFail() {
      unroll(emptySquare);
    }

    expect(emptyArrayFail).toThrow(new Error ("Array must have values!"));

  });

  it("returns error for object", function () {

    function objectFail() {
      unroll(objSquare);
    }

    expect(objectFail).toThrow(new Error ("Invalid data type!"));

  });

  it("returns error for number", function () {

    function numberFail() {
      unroll(number);
    }

    expect(numberFail).toThrow(new Error ("Invalid data type!"));

  });

  it("returns error for string", function () {

    function stringFail() {
      unroll(string);
    }

    expect(stringFail).toThrow(new Error ("Invalid data type!"));

  });

});
