import TaskItem from './TaskItem';

export default function TaskList(props) {
    return (
        <div>
            {props.tasks.map((task) => (
                <TaskItem 
                key={task.id} 
                task={task} 
                projectId={props.projectId}
                onToggleTaskCompleted={props.onToggleTaskCompleted}
                onDeleteTask={props.onDeleteTask}
                onEditTask={props.onEditTask}
                />
            ))}
        </div>
    )
}