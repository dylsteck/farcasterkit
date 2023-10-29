import { parseQuery } from "../database";

it("parseQuery standard", () => {
  const params = {
    foo: "bar",
    baz: "qux",
    quux: "quuz",
    group: "Group:1",
  };
  const query = parseQuery(params);
  expect(query).toEqual('where foo = "bar" AND baz = "qux" AND quux = "quuz" AND group = Group:1');
});

it("parseQuery", () => {
  const params = {
    foo: "",
    baz: undefined,
    quux: null,
  };
  const query = parseQuery(params);
  expect(query).toEqual("");
});
