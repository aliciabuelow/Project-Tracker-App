import TaskList from './TaskList';

export default function ProjectCard(props) {
    return (
        <div>
            <h2>{props.project.title}</h2>
            <p>{props.project.description}</p>
            <TaskList tasks={props.project.tasks} />
        </div>
    );
}