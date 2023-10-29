import * as yup from "yup";

export const EmployeeSchema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  employeeCode: yup.string(),
  gender: yup.string().required(),
  joinedAt: yup.string().required(),
  contractType: yup.string().required(),
  group: yup.string().required(),
  periodCollection: yup.string().required(),
  payType: yup.string().optional().default("monthly"),
  status: yup.string().optional().default("active"), // 在籍
});

export interface Employee extends yup.InferType<typeof EmployeeSchema> {
  id?: string;
}

export interface EmployeeRecord extends yup.InferType<typeof EmployeeSchema> {
  id: string;
}

export const MockEmployee = {
  firstName: "Jifa",
  lastName: "Jiang",
  employeeCode: "123",
  gender: "male",
  joinedAt: "2021-01-01",
  contractType: "full-time",
  group: "group-1",
  periodCollection: "period-collection-1",
  payType: "monthly",
};

export interface EmployeePayItem {
  employee: string;
  items: {
    id: string;
    name: string;
    amount: number;
  }[];
}

export const MockEmployeePayItem = {
  employee: "test", // can be removed, SurrealDB supports EmployeePayItem:employeeId
  items: [
    {
      id: "1",
      name: "役員報酬",
      amount: 100,
    },
    {
      id: "2",
      name: "基本給",
      amount: 0,
    },
    {
      id: "3",
      name: "業務手当",
      amount: 0,
    },
    {
      id: "4",
      name: "リーダー手当",
      amount: 0,
    },
  ],
};

export type EmployeeDeductionItem = EmployeePayItem;

export const MockEmployeeDeductionItem = {
  employee: "test",
  items: [
    {
      id: "1",
      name: "寮費",
      amount: 0,
    },
    {
      id: "2",
      name: "水道光熱費",
      amount: 0,
    },
  ],
};

export const MockEmployeeTimeItem = {
  employee: "test",
  items: [
    {
      id: "1",
      category: "1",
      name: "1日の所定労働時間",
      originalValue: 8.0,
      value: 8.0,
      unit: "hour",
    },
    {
      id: "2",
      category: "1",
      name: "所定労働日数(当月)",
      originalValue: 19.0,
      value: 19.0,
      unit: "day",
    },
    {
      id: "3",
      category: "1",
      name: "所定労働日数(月平均)	",
      originalValue: 20.0,
      value: 20.0,
      unit: "day",
    },
    {
      id: "4",
      category: "2",
      name: "控除時間",
      originalValue: 0.0,
      value: 0.0,
      unit: "hour",
    },
    {
      id: "5",
      category: "3",
      name: "実働時間",
      originalValue: 0.0,
      value: 0.0,
      unit: "hour",
    },
    {
      id: "6",
      category: "3",
      name: "みなし残業時間",
      originalValue: 0.0,
      value: 0.0,
      unit: "day",
    },
    {
      id: "7",
      category: "4",
      name: "有休取得日数",
      originalValue: 0.0,
      value: 0.0,
      unit: "day",
    },
  ],
};
