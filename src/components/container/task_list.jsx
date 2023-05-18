import React, { useEffect, useState } from "react";
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/levels.enum";
import TaskComponent from "../pure/task";
import "../../styles/task.scss";
import TaskForm from "../pure/forms/taskForm";

const TaskListComponent = () => {
  const defaultTask1 = new Task(
    "Example1",
    "Description 1",
    true,
    LEVELS.NORMAL
  );
  const defaultTask2 = new Task(
    "Example2",
    "Description 2",
    false,
    LEVELS.URGENT
  );
  const defaultTask3 = new Task(
    "Example3",
    "Description 3",
    false,
    LEVELS.BLOCKING
  );

  //Estado del componente
  const [tasks, setTasks] = useState([
    defaultTask1,
    defaultTask2,
    defaultTask3,
  ]);

  const [loading, setLoading] = useState(true);

  //COntrol del ciclo de vida del componente
  useEffect(() => {
    console.log("Task State has been modified");
    setLoading(false);
    return () => {
      console.log("TaskList component is going to unmount...");
    };
  }, [tasks]);

  function completeTask(task) {
    console.log("Complete this Task:", task);
    const index = tasks.indexOf(task);
    const tempTask = [...tasks];
    tempTask[index].completed = !tempTask[index].completed;
    // We update the state of the component with the new list of tasks and it will update the
    // Iteration of the tasks in order to show the task updated
    setTasks(tempTask);
  }

  function deleteTask(task){
    console.log("Delete this Task:", task);
    const index = tasks.indexOf(task);
    const tempTask = [...tasks];
    tempTask.splice(index,1);
    setTasks(tempTask);
  }

  function addTask(task){
    console.log("Adding a Task:", task);
    const index = tasks.indexOf(task);
    const tempTask = [...tasks];
    tempTask.push(task);
    setTasks(tempTask);
  }

  return (
    <div>
      <div className="col-12">
        <div className="card">
          <div className="card-header p-3">
            <h5>Your Tasks:</h5>
          </div>
          <div
            className="card-body"
            data-md-perfect-scrollbar="true"
            style={{ position: "relative", height: "400px" }}
          >
            <table>
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Description</th>
                  <th scope="col">Priority</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* TODO: Iterar sobre una lista de tareas */}
                {tasks.map((task, index) => {
                  return (
                    <TaskComponent
                      key={index}
                      task={task}
                      complete={completeTask}
                      remove={deleteTask}
                    ></TaskComponent>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <TaskForm add={addTask}></TaskForm>
    </div>
  );
};

export default TaskListComponent;