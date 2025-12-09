import express from "express";
import tasksRoutes from "./routes/tasksRoutes.js";

const app = express();
const PORT = 5001;

app.use("/api/tasks", tasksRoutes);

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
