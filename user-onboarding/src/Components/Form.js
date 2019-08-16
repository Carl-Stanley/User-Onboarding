import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
function LoginForm({ values, errors, touched, isSubmitting }) {
  return (
    <Form>
        <div>
        {touched.Name && errors.Name && <p>{errors.Name}</p>}
        <Field type="text" name="Name" placeholder="Your Name" />
        </div>
      <div>
        {touched.email && errors.email && <p>{errors.email}</p>}
        <Field type="email" name="email" placeholder="Email" />
      </div>
      <div>
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Field type="password" name="password" placeholder="Password" />
      </div>
      <label>
        <Field type="checkbox" name="tos" checked={values.tos} />
        Terms of Service
      </label>
      <button type="submit">Submit</button>
    </Form>
  );
}

const FormikLoginForm = withFormik({
  mapPropsToValues({ email, password, Name, tos }) {
    return {

      email: email || "",
      password: password || "",      
      Name: Name || "",
      tos : tos  || false
    };
  },

  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Email not valid")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be 6 characters or longer")
      .required("Password is required"),
     Name: Yup.string()
       .required("Your Name is required"),
    tos: Yup.boolean()
       .required("You must accept the TOS!")  
  }),

  handleSubmit(values,{ resetForm, setErrors, setSubmitting }) {
    axios
        .post("https://reqres.in/api/users", values)
        .then(res => {
          console.log(res); // It worked. 
          resetForm();
          setSubmitting(false);
        })
        .catch(err => {
          console.log("Another Error? ",err); // Another error? Get used to failure. 
          setSubmitting(false);
        });    
  }
})(LoginForm);

export default FormikLoginForm;