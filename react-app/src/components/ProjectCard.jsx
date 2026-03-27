import { useState } from 'react';
import TaskList from './TaskList';
import NewTaskForm from './NewTaskForm';
import '../styles/ProjectCard.css';

export default function ProjectCard(props) {
    const totalTasks = props.project.tasks.length;
    const completedTasks = props.project.tasks.filter((task) => task.completed).length;
    const [filter, setFilter] = useState('all');

    const filteredTasks = props.project.tasks.filter((task) => {
        if (filter === 'active') {
            return !task.completed;
        }
        
        if (filter === 'completed') {
            return task.completed;
        }
        
        return true;
    })


    return (
        <div className="project-card">
            <h2 className="project-card-title">{props.project.title}</h2>
            <p className="project-card-description">{props.project.description}</p>

            <p className="project-progress">
                {completedTasks} / {totalTasks} tasks completed
            </p>

            <div className="task-filters">
                <button
                    type="button"
                    className={filter === 'all' ? 'filter-btn active' : 'filter-btn'}
                    onClick={() => setFilter('all')}
                >
                    All
                </button>

                <button
                    type="button"
                    className={filter === 'active' ? 'filter-btn active' : 'filter-btn'}
                    onClick={() => setFilter('active')}
                >
                    Active
                </button>

                <button
                    type="button"
                    className={filter === 'completed' ? 'filter-btn active' : 'filter-btn'}
                    onClick={() => setFilter('completed')}
                >
                    Completed
                </button>
            </div>

            <TaskList 
            tasks={filteredTasks} 
            projectId={props.project.id}
            onToggleTaskCompleted={props.onToggleTaskCompleted}
            onDeleteTask={props.onDeleteTask}
            onEditTask={props.onEditTask}
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