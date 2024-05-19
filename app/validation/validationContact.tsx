import * as Yup from "yup";
import { variables } from "./variable";

const { required, IsEmail } = variables;
const validationContact = Yup.object({
  name: Yup.string()
    .required(required)
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
  email: Yup.string().required(required).email(IsEmail),
  company: Yup.string().required(required),
  message: Yup.string()
    .required(required)
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
  recaptcha: Yup.string().required("Please complete the ReCAPTCHA validation."),
});
export default validationContact;
