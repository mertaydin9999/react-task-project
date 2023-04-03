import { useState } from "react";
import TaskCreate from "./TaskCreate";

function TaskShow({ task, onDelete , onUpdate}) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(task.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit=(id,updatedTitle,updatedTaskDesc)=>{
    setShowEdit(false);
    onUpdate(id,updatedTitle,updatedTaskDesc);
  }

  return (
    <div className="task-show">
      {showEdit ? (
        <TaskCreate task={task} taskFormUpdate={true} onUpdate={handleSubmit}/>
      ) : (
        <div>
          <h3 className="task-title">Goreviniz</h3>
          <p>{task.title}</p>
          <h3 className="task-title"> Yapilacaklar</h3>
          <p>{task.taskDesc}</p>
          <div>
            <button className="delete-button" onClick={handleDeleteClick}>
              Sil
            </button>
            <button onClick={handleEditClick} className="update-button">
              Guncelle
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskShow;
