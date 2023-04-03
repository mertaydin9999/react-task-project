import { useState } from "react";
import { useContext } from "react";
import TasksContext from "../context/task";

function TaskCreate({ task, taskFormUpdate,onUpdate }) {
  const { createTask, editTaskById } = useContext(TasksContext);

  const [title, setTitle] = useState(task ? task.title : "");
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : "");
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleTaskChange = (event) => {
    setTaskDesc(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskFormUpdate) {
      onUpdate(task.id, title, taskDesc);
      //editTaskById(task.id, title, taskDesc);
    } else {
      //onCreate(title, taskDesc);
      createTask(title, taskDesc);
    }

    setTitle("");
    setTaskDesc("");
  };

  return (
    <div>
      {taskFormUpdate ? (
        <div className="task-update">
          <h3>Lutfen Taski Duzenleyiniz!</h3>
          <form className="task-form">
            <label className="task-label">Basligi Duzenleyiniz</label>
            <input
              className="task-input"
              value={title}
              onChange={handleChange}
              type="text"
            />
            <label className="task-label">Taski Duzenleyiniz</label>
            <textarea
              className="task-input"
              rows="5"
              value={taskDesc}
              onChange={handleTaskChange}
            ></textarea>
            <button
              className="task-button task-update-button"
              onClick={handleSubmit}
              type="submit"
            >
              Duzenle
            </button>
          </form>
        </div>
      ) : (
        <div className="task-create">
          <h3>Lutfen Task Ekleyiniz!</h3>
          <form className="task-form">
            <label className="task-label">Baslik</label>
            <input
              className="task-input"
              value={title}
              onChange={handleChange}
              type="text"
            />
            <label className="task-label">Task Giriniz!</label>
            <textarea
              className="task-input"
              rows="5"
              value={taskDesc}
              onChange={handleTaskChange}
            ></textarea>
            <button
              className="task-button"
              onClick={handleSubmit}
              type="submit"
            >
              Olustur
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;
