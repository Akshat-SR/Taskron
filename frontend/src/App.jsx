import { Route, Routes } from "react-router";

import HomePage from "./pages/HomePage.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import TaskDetailPage from "./pages/TaskDetailPage.jsx";
// import toast from "react-hot-toast";

const App = () => {
  return (
    <div className="relative h-full w-full">
      <div class="absolute inset-0 -z-10 h-full w-full  [background:radial-gradient(125%_125%_at_50%_10%,#121c22_63%,#ff865b_110%)]" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/task/:id" element={<TaskDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
