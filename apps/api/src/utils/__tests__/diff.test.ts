import { diff } from "../diff";

test("diff: should return the diff between two arrays", () => {
  const data = [
    {
      id: "department:2",
      name: "ソリューション（旧）",
    },
    {
      id: "department:3",
      name: "新規開拓室",
    },
    {
      id: "department:4",
      name: "営業部",
    },
  ];

  const origin = [
    {
      id: "department:1",
      name: "SES",
    },
    {
      id: "department:2",
      name: "ソリューション",
    },
    {
      id: "department:3",
      name: "新規開拓室",
    },
  ];

  const diffData = [
    {
      id: "department:2",
      name: "ソリューション（旧）",
      method: "update",
    },
    {
      id: "department:4",
      name: "営業部",
      method: "create",
    },
    {
      id: "department:1",
      name: "SES",
      method: "delete",
    },
  ];

  const result = diff(data, origin);

  expect(result).toEqual(diffData);
});
