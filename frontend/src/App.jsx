import { Route, Routes } from "react-router";

import HomePage from "./pages/HomePage.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import TaskDetailPage from "./pages/TaskDetailPage.jsx";
// import toast from "react-hot-toast";

const App = () => {
  return (
    <div data-theme="sunset">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/task/:id" element={<TaskDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
