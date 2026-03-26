import { Check, Trash2 } from 'lucide-react';
import '../styles/TaskItem.css';

export default function TaskItem(props) {
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
        <span className="task-text">{props.task.text}</span>
        <span className="task-status">
          {props.task.completed ? 'Completed' : 'Not completed'}
        </span>
      </div>
    </div>

    <div className="task-actions">
      <button className="task-icon-btn delete" onClick={handleDeleteClick}>
        <Trash2 size={16} />
      </button>
    </div>

  </div>
);
}