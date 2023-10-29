import * as yup from "yup";

export const GroupSchema = yup.object({
  name: yup.string().required(),
  main: yup.boolean(),
  kana: yup.string(),
  zipcode: yup.string(),
  prefecture: yup.string(),
  city: yup.string(),
  street: yup.string(),
  building: yup.string(),
  tel: yup.string(),
  fax: yup.string(),
  url: yup.string(),
  presidentRole: yup.string(),
  presidentName: yup.string(),
  presidentKana: yup.string(),
});

export type Group = yup.InferType<typeof GroupSchema>;

export const defaultGroup = {
  main: true,
  name: "",
  kana: "",
  zipcode: "",
  prefecture: "",
  city: "",
  street: "",
  building: "",
  tel: "",
  fax: "",
  url: "",
  presidentRole: "",
  presidentName: "",
  presidentKana: "",
};
