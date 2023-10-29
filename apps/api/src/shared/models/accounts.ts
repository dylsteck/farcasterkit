import * as yup from "yup";

export const AccountSchema = yup.object({
  name: yup.string().required(),
  role: yup.string().required(), // operator, viewer
  email: yup.string().required(),
  expiredAt: yup.string().required(),
});

export type Account = yup.InferType<typeof AccountSchema>;
