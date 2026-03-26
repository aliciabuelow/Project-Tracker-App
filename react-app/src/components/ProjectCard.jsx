import TaskList from './TaskList';
import NewTaskForm from './NewTaskForm';
import '../styles/ProjectCard.css';

export default function ProjectCard(props) {
    const totalTasks = props.project.tasks.length;
    const completedTasks = props.project.tasks.filter((task) => task.completed).length;

    return (
        <div className="project-card">
            <h2 className="project-card-title">{props.project.title}</h2>
            <p className="project-card-description">{props.project.description}</p>

            <p className="project-progress">
                {completedTasks} / {totalTasks} tasks completed
            </p>

            <TaskList 
            tasks={props.project.tasks} 
            projectId={props.project.id}
            onToggleTaskCompleted={props.onToggleTaskCompleted}
            onDeleteTask={props.onDeleteTask}
            />
            <NewTaskForm 
            tasks={props.project.tasks} 
            projectId={props.project.id}
            onAddTask={props.onAddTask}
            />
            
            <div className="project-actions">
            <button 
            className="edit-btn"
            onClick={() => props.onEditProject(props.project)}
            >
                Edit
            </button>
            <button 
            className="delete-btn"
            onClick={() => props.onDeleteProject(props.project.id)}
            >
                Delete
            </button>
            </div>
        </div>
    );
}