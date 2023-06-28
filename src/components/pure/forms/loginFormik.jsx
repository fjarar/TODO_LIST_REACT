import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginFormik = () => {
  const initialCredentials = {
    email: "",
    password: "",
  };

  const history = useNavigate();

  return (
    <div>
      <h4>Login Formik</h4>
      <Formik
        // *** Initial values that the form will take
        initialValues={initialCredentials}
        // *** Yup validation Schema
        validationSchema={loginSchema}
        // *** onSubmit Event
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1000));
          alert(JSON.stringify(values, null, 2));
          // We save the data in the localstorage
          await localStorage.setItem('credentials', values);
          history('/profile')
        }}
      >
        {/* We obtain props from Formik */}
        {({ values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur }) => (
              <Form>
              <label htmlFor="email">Email</label>
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="example@email.com"
              />
              {/* Email errors */}
              {
                errors.email && touched.email && 
                (
                  <ErrorMessage name='email' component='div'></ErrorMessage>           
                  
                )
              }
              <label htmlFor="password">Password</label>
              <Field
                id="password"
                type="password"
                name="password"
                placeholder="password"
              />
              {/* Password errors */}
              {
                errors.password && touched.password && 
                (
                  <ErrorMessage name='password' component='div'></ErrorMessage>
                )
              }

              <button type="submit">Login</button>
              {isSubmitting ? (<p>Login your credentials...</p>):null}
            </Form>
            )}        
      </Formik>
    </div>
  );
};

export default LoginFormik;
