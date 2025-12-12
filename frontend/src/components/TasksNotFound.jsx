import { NotebookTextIcon } from "lucide-react";
import { Link } from "react-router";

const TasksNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center">
      <div className="bg-primary/10 rounded-full p-8">
        <NotebookTextIcon className="size-10 text-primary" />
      </div>
      <h3 className="text-2xl font-bold">No Tasks yet</h3>
      <p className="text-base-content/70">
        Ready to organize your work? Create your first task to get started on
        your journey.
      </p>
      <Link to="/create" className="btn btn-primary">
        Create Your First Task
      </Link>
    </div>
  );
};

export default TasksNotFound;
