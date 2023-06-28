import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
  useNavigate,
  useLocation,
  useMatches,
  useParams
} from "react-router-dom";

import { useEffect, useMemo } from "react";

import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./pages/404/NotFoundPage";
import AboutPage from "./pages/about-faqs/AboutPage";
import ProfilePage from "./pages/profile/ProfilePage";
import TasksPage from "./pages/tasks/TasksPage";
import TaskDetailPage from "./pages/tasks/TaskDetailPage";
import LoginPage from "./pages/auth/LoginPage";
import StatePage from "./pages/home/StatePage";

function MultiRoute(el, ...paths) {
  return paths.map((p) => <Route key={p} element={el} path={p} />);
}

function AppRoutingOne() {
  const logged = false;

  let taskList = [
    {
      id: 1,
      name: "Task 1",
      description: "My first Task",
    },
    {
      id: 2,
      name: "Task 2",
      description: "My Second Task",
    },
    {
      id: 3,
      name: "Task 3",
      description: "My third Task",
    },
  ];

  

  const RedirectMessage = () => {
    const location = useLocation();

    useEffect(() => {
      const timer = setTimeout(() => {
        window.location.href = "/login";
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    }, []);
    return <div>You must be logged in to access this page...</div>;
  };

  const RedirectHome = () => {
    const location = useLocation();

    useEffect(() => {
      const timer = setTimeout(() => {
        window.location.href = "/";
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    }, []);
    return <div>You are logged in. Redirecting to Home...</div>;
  };

  return (
    <Router>
      <div>
        <aside>
          <Link to="/">|| HOME |</Link>
          <Link to="/about">| ABOUT |</Link>
          <Link to="/faqs">| FAQs |</Link>
          <Link to="/tasks/1">| Task 1 |</Link>
          <Link to="/tasks/2">| Task 2 |</Link>
          <Link to="/nada">| Runa Inexistente |</Link>
          <Link to="/login">| Login ||</Link>
        </aside>

        <main>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/online-state" element={<StatePage />} />
            <Route
              exact
              path="/login"
              element={logged ? <RedirectHome /> : <LoginPage />}
            ></Route>
            {MultiRoute(<AboutPage />, "/about", "/faqs")}
            <Route
              exact
              path="/profile"
              element={logged ? <ProfilePage /> : <RedirectMessage />}
            ></Route>
            <Route path="/tasks" element={<TasksPage />} />
            <Route
              exact
              path="/tasks/:id"
              element={
                <TaskDetailPage task={taskList}/>                
              }
            ></Route>

            {/* 404 - Page Not Found */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default AppRoutingOne;
