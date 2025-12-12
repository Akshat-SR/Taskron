import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

import Navbar from "../components/Navbar.jsx";
import RateLimitedUI from "../components/RateLimitedUi.jsx";
import TaskCard from "../components/TaskCard.jsx";
import api from "../lib/axios.js";

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await api.get("/tasks");
        console.log(res.data);
        setTasks(res.data);
        setIsRateLimited(false);
      } catch (error) {
        console.log("Error fetching tasks");
        if (error.response.status === 429) {
          setIsRateLimited(true);
        } else {
          toast.error("Failed to load tasks");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, []);
  return (
    <div className="min-h-screen">
      <Navbar />

      {isRateLimited && <RateLimitedUI />}

      <div className="max-w-7xl mx-auto p-4 mt-6 ">
        {loading && (
          <div className="text-center text-primary py-10">Loading Tasks...</div>
        )}

        {tasks.length > 0 && !isRateLimited && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tasks.map(task => (
              <TaskCard key={task._id} task={task} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
