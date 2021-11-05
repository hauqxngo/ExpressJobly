const { sqlForPartialUpdate } = require("./sql");

describe("sqlForPartialUpdate", () => {
  test("works: 1 item", () => {
    const result = sqlForPartialUpdate(
      { field1: "val1" },
      { field1: "field1", Field2: "field2" }
    );

    expect(result).toEqual({
      setCols: '"field1"=$1',
      values: ["val1"],
    });
  });

  test("works: 2 items", () => {
    const result = sqlForPartialUpdate(
      { field1: "val1", jsField2: "val2" },
      { jsField2: "field2" }
    );
    expect(result).toEqual({
      setCols: '"field1"=$1, "field2"=$2',
      values: ["val1", "val2"],
    });
  });
});
