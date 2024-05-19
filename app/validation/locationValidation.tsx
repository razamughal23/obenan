import * as Yup from "yup";
import { variables } from "./variable";

const { required, IsEmail } = variables;
const validationWebsite = Yup.object({
  email: Yup.string().required(required).email(IsEmail),
  website: Yup.string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Enter correct url!",
    )
    .required(required),
  keyword: Yup.string().required(required),
});
export default validationWebsite;
