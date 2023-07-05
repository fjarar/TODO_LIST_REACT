import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { login, getAllUsers, getAllPagedUsers, getUserById, createUser, updateUser, deleteUser } from "../services/axiosCRUDService";

const AxiosCRUDExample = () => {
  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const initialCredentials = {
    email: "",
    password: "",
  };

  const authUser = (values) => {
    login(values.email, values.password)
      .then((response) => {
        alert(JSON.stringify(response.data.token));
        sessionStorage.setItem("token", response.data.token);
      })
      .catch((error) => {
        alert(`Something went wrong: ${error}`);
      })
      .finally(() => console.log("Login done"));
  };

  // CRUD Examples
  const obtainAllUsers = () => {
    getAllUsers()
    .then((response)=>{
        console.log(JSON.stringify(response.data.data))
    })
    .catch((error)=>{
        alert(`Something went wrong: ${error}`);
    })
  }

  const obtainAllPagedUsers = (page) => {
    getAllPagedUsers(page)
    .then((response)=>{
        if(response.data && response.status === 200){
            alert(JSON.stringify(response.data.data))
        }else{
            throw new Error(`No users found in page ${page}`)
        }
    })
    .catch((error)=>{
        alert(`Something went wrong: ${error}`);
    })
  }

  const obtainUserById = (id) => {
    getUserById(id)
    .then((response) => {
        if(response.data && response.status === 200){
            alert(JSON.stringify(response.data.data))
        }else{
            throw new Error('User not found')
        }
    })
    .catch((error)=>{
        alert(`Something went wrong: ${error}`)
    })
  }

  const updateSelectedUser = (id, name, job) => {
    updateUser(id, name, job)
    .then((response) => {
        if(response.data && response.status === 200){
            alert(JSON.stringify(response.data))
        }else{
            throw new Error('User not found & no update done')
        }
    })
    .catch((error)=>{
        alert(`Something went wrong: ${error}`)
    })
  }

  const deleteSelectedUser = (id) => {
    deleteUser(id)
    .then((response) => {
        if(response.status === 204){
            alert(`User with id: ${id} succesfully deleted`)
        }else{
            throw new Error('User not deleted')
        }
    })
    .catch((error)=>{
        alert(`Something went wrong: ${error}`)
    })
  }

  const createNewUser = (name, job) => {
    createUser(name, job)
    .then((response) => {
        if(response.data && response.status === 201){
            alert(JSON.stringify(response.data))
        }else{
            throw new Error('User not created')
        }
    })
    .catch((error) => alert(`Something went wrong: ${error}`))
  }

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
          authUser(values);
        }}
      >
        {/* We obtain props from Formik */}
        {({
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
        }) => (
          <Form>
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              type="email"
              placeholder="example@email.com"
            />
            {/* Email errors */}
            {errors.email && touched.email && (
              <ErrorMessage name="email" component="div"></ErrorMessage>
            )}
            <label htmlFor="password">Password</label>
            <Field
              id="password"
              type="password"
              name="password"
              placeholder="password"
            />
            {/* Password errors */}
            {errors.password && touched.password && (
              <ErrorMessage name="password" component="div"></ErrorMessage>
            )}

            <button type="submit">Login</button>
            {isSubmitting ? <p>Login your credentials...</p> : null}
          </Form>
        )}
      </Formik>
      {/* Example buttons to test API responses */}
      <div>
        <button onClick={obtainAllUsers}>Get All Users with Axios</button>
        <button onClick={() => obtainAllPagedUsers(1)}>Get All Users (Page 1) with Axios</button>
        <button onClick={() => obtainUserById(1)}>Get User 1</button>
        <button onClick={() => createNewUser('morpheus', 'leader')}>Create User</button>
        <button onClick={() => updateSelectedUser(1, 'morpheus', 'Developer')}>Update User</button>
        <button onClick={() => deleteSelectedUser(1)}>Delete User</button>
      </div>
    </div>
  );
};

export default AxiosCRUDExample;
