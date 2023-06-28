import { Switch } from "@mui/material";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import NotFoundPage from "./pages/404/NotFoundPage";
import LoginPage from "./pages/auth/LoginPage";
import DashBoard from "./pages/dashboard/DashBoard";
import RegisterPage from "./pages/auth/RegisterPage";
import TasksPage from "./pages/tasks/TasksPage";

const AppRoutingFinal = () => {
  // TODO: Change to value from sessionStorage (or something dinamic)
  let loggedIn = false;

  return (
    <Router>
      {/* Route Switch */}
      <Routes>
        {/* Redirections to protect our routes */}
        <Route
          exact
          path=""
          element={
            loggedIn ? (
              <Navigate from="/" to="/dashboard" />
            ) : (
              <Navigate from="/" to="/login" />
            )
          }
        ></Route>
        {/* Login Route */}
        <Route exact path="/login" element={<LoginPage />}></Route>
        {/* DashBoard Route */}
        <Route
          exact
          path="/dashboard"
          element={loggedIn ? <DashBoard /> : <Navigate from="/" to="/login" />}
        ></Route>
        <Route exact path="/register" element={<RegisterPage />}></Route>
        <Route
          exact
          path="/tasks"
          element={
            loggedIn ? (
              <TasksPage />
            ) : (
              <Navigate to='/login' />
            )
          }
        ></Route>
        <Route element={<NotFoundPage />}></Route>
      </Routes>
    </Router>
  );
};

export default AppRoutingFinal;
