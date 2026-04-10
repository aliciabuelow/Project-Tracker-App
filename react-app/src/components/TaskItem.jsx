import { useState } from 'react';
import { Check, Pencil, Trash2 } from 'lucide-react';
import '../styles/TaskItem.css';

export default function TaskItem(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(props.task.text);

  function handleSave() {
    props.onEditTask(props.projectId, props.task.id, editedText);
    setIsEditing(false);
  }

    function handleToggleClick() {
        props.onToggleTaskCompleted(props.projectId, props.task.id);
    }

    function handleDeleteClick() {
        props.onDeleteTask(props.projectId, props.task.id);
    }

    return (
  <div className={`task-item ${props.task.completed ? 'task-completed' : ''}`}>
    
    <div className="task-left">
      <button 
        className={`task-checkbox ${props.task.completed ? 'checked' : ''}`}
        onClick={handleToggleClick}
      >
        {props.task.completed && <Check size={14} />}
      </button>

      <div className="task-content">
        
      {isEditing ? (
        <input
          className="task-edit-input"
          value={editedText}
          onChange={(event) => setEditedText(event.target.value)}
          autoFocus
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              handleSave();
            }
          }}
        />
      ) : (
        <span className="task-text">{props.task.text}</span>
      )}

        <span className="task-status">
          {props.task.completed ? 'Completed' : 'Not completed'}
        </span>
      </div>
    </div>

    <div className="task-actions">

      {isEditing ? (
        <>
        <button className="task-icon-btn" onClick={handleSave}>
          Save
        </button>
        <button
        className="task-icon-btn"
        onClick={() => {
          setIsEditing(false);
          setEditedText(props.task.text);
        }}
        >
          Cancel
        </button>
        </>
      ) : (
      <button
        className="task-icon-btn"
        onClick={() => setIsEditing(true)}
      >
        <Pencil size={16} />
      </button>
      )}

      <button className="task-icon-btn delete" onClick={handleDeleteClick}>
        <Trash2 size={16} />
      </button>
    </div>

  </div>
);
}