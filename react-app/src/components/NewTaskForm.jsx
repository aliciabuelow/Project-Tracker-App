import { useState } from 'react';
import '../styles/NewTaskForm.css'

export default function NewTaskForm(props) {
    const [taskText, setTaskText] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        props.onAddTask(props.projectId, taskText);

        setTaskText('');
    }

    return (
        <form className="new-task-form" onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder="New task" 
            value={taskText} 
            onChange={(event) => setTaskText(event.target.value)}
            />
            <button type="submit">Add Task</button>
        </form>
    )
}