export function getAllTasks(req, res) {
  res.status(200).send("You fetched the Tasks");
}

export function createTask(req, res) {
  res.status(201).json({ message: "Task Created Sucessfully!" });
}

export function updateTask(req, res) {
  res.status(200).json({ message: "Task Updated Sucessfully!" });
}

export function deleteTask(req, res) {
  res.status(200).json({ message: "Task Deleted Sucessfully!" });
}
