import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./pages/404/NotFoundPage";
import AboutPage from "./pages/about-faqs/AboutPage";
import ProfilePage from "./pages/profile/ProfilePage";
import TasksPage from "./pages/tasks/TasksPage";
import TaskDetailPage from "./pages/tasks/TaskDetailPage";

function MultiRoute(el, ...paths) {
  return paths.map((p) => <Route key={p} element={el} path={p} />);
}

function AppRoutingOne() {
  return (
    <Router>
      <div>
        <aside>
          <Link to="/">|| HOME |</Link>
          <Link to="/about">| ABOUT |</Link>
          <Link to="/faqs">| FAQs ||</Link>
          <Link to='/nada'>| Runa Inexistente ||</Link>
        </aside>

        <main>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            {MultiRoute(<AboutPage />, "/about", "/faqs")}
            <Route path="/profile" element={<ProfilePage />}></Route>
            <Route path="/tasks" element={<TasksPage />}></Route>
            <Route path="/tasks/:id" element={<TaskDetailPage />}></Route>

            {/* 404 - Page Not Found */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default AppRoutingOne;
