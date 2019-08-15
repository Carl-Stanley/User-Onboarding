import React from "react";
import { withFormik, Form, Field } from "formik";

function LoginForm() {
    return (
      <Form>
        <Field type="text" name="username" placeholder="Username" />
        <Field type="password" name="password" placeholder="Password" />
        <button>Submit!</button>
      </Form>
    );
  }
  
  export default LoginForm;