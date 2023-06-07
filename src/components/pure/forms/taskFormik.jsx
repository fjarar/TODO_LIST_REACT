import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

// Models
import { Task } from "../../../models/task.class";
import { LEVELS } from "../../../models/levels.enum";

const TaskFormik = ({ add, length }) => {
  const initialValues = {
    taskName: "",
    description: "",
    completed: false,
    level: LEVELS.NORMAL,
  };

  const taskSchema = Yup.object().shape({
    taskName: Yup.string()
      .min(4, "Task name too short")
      .max(15, "Task name too long")
      .required("Task name is required"),
    description: Yup.string().required("Description is required"),
    completed: Yup.boolean().required(),
    level: Yup.string()
      .oneOf(
        [LEVELS.NORMAL, LEVELS.URGENT, LEVELS.BLOCKING],
        "You must select a LEVEL: NORMAL, URGENT or BLOCKING"
      )
      .required("Level is required"),
  });

  const addTask = (values) => {
    const newTask = new Task(
      values.taskName,
      values.description,
      false,
      values.level
    );
    add(newTask);
    //alert(JSON.stringify(values, null, 2))
  };

  return (
    <div>
      <h4>Register Task</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={taskSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1000));
          //alert(JSON.stringify(values, null, 2));
          addTask(values);
        }}
      >
        {({
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handelblur,
        }) => (
          <Form className="d-flex justify-content-center align-items-center mb-4">
            <div className="form-outline flex-fill">
              <Field
                id="taskName"
                name="taskName"
                type="text"
                placeholder="Type a task name"
                className="form-control form-control-lg"
              ></Field>
              {errors.taskName && touched.taskName && (
                <ErrorMessage name="taskName" component="div"></ErrorMessage>
              )}
              <Field
                id="description"
                name="description"
                type="text"
                placeholder="Type a Description"
                className="form-control form-control-lg"
              ></Field>
              {errors.description && touched.description && (
                <ErrorMessage name="description" component="div"></ErrorMessage>
              )}
              <Field
                id="level"
                name="level"
                component="select"
                className="form-control form-control-lg"
              >
                <option value={LEVELS.NORMAL}>NORMAL</option>
                <option value={LEVELS.URGENT}>URGENT</option>
                <option value={LEVELS.BLOCKING}>BLOCKING</option>
              </Field>
              {errors.level && touched.level && (
                <ErrorMessage name="level" component="div"></ErrorMessage>
              )}
              <button type="submit" className="btn btn-success btn-lg ms-2">
                {length > 0 ? "Add New Task" : "Create your First Task"}
              </button>
              {isSubmitting ? <p>Adding a new Task...</p> : null}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TaskFormik;
