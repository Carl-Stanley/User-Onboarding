import React from "react";
import { withFormik, Form, Field } from "formik";

function LoginForm() {
  return (
    <Form>

      <Field type="name" name="name" placeholder="Name" />  
      <Field type="email" name="email" placeholder="Email" />
      <Field type="password" name="password" placeholder="Password" />
      <Field type="checkbox" name="tos" placeholder="unchecked"/>  
      <button>Submit!</button>
    </Form>
  );
}

const FormikLoginForm = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || "",
      password: password || ""
    };
  },

  handleSubmit(values) {
    console.log(values);
    //THIS IS WHERE YOU DO YOUR FORM SUBMISSION CODE... HTTP REQUESTS, ETC.
  }
})(LoginForm);

export default FormikLoginForm;