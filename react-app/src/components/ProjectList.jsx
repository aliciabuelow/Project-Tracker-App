import ProjectCard from './ProjectCard';

export default function ProjectList(props) {
    if (props.projects.length === 0) {
        return (
            <div className="empty-state">
                <h2>No projects yet</h2>
                <p>Add your first project to get started.</p>
            </div>
        )
    }

    return (
       <div className="project-list">
        {props.projects.map((project) => (
            <ProjectCard 
            key={project.id} 
            project={project} 
            onAddTask={props.onAddTask}
            onToggleTaskCompleted={props.onToggleTaskCompleted}
            onDeleteTask={props.onDeleteTask}
            onDeleteProject={props.onDeleteProject}
            onEditProject={props.onEditProject}
            onEditTask={props.onEditTask}
            />
        ))}
       </div>
    );
}